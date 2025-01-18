<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use App\Models\Bike;
use App\Models\Transaction;
use App\Models\SwapCard;
use App\Models\SwapCardUser;
use App\Models\ChargingStation;
use App\Models\BikeUser;
use Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Mail;
use App\Models\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Mail\AccountVerificationMail;
use App\Mail\ForgetPasswordMail;


class UserController extends Controller
{



    public function __construct()
    {

        //Setting the guard of login person
        \Config::set('auth.defaults.guard','user-api');
    }

    public function appusersview()
    {
        return view('appusers');
    }

    public function bikeSwapCardOwnerView()
    {
        return view('bikeSwapCardOwner');
    }
    /**
     * Login a User
     */

    public function login(Request $request)
    {
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['email', 'password']), [
            'email' => 'required|string|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        $user = User::where('email', $request->email)->first();


        //checking whether email and password matches or not with the database
        //token is generated when the user and password matches with the database
        if(!$token = auth()->attempt($validator->validated())){
            return response()->json(['success'=>false,'msg'=>'Email or Password is invalid'], 401);

        }

        if (!$user->is_verified) {
            return response()->json([
                'msg' => 'Email is not verified'
            ], 403);
        }



        return $this->createNewToken($token);
    }

    /**
      * get the token array structure.
      *
      * @param string $token
      * @return \Illuminate\Http\JsonResponse
      */
    protected function createNewToken($token){
        return response()->json([
            'success' => 'true',
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => auth()->user()
        ], 200);
    }




    /**
     * Register a User
     */


    public function register(Request $request)
    {
        //validating the data
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['name', 'email', 'password', 'password_confirmation', 'phone']), [
            'name'=>'required|string|min:2|max:100',
            'email'=>'required|string|email|max:100|unique:users', //email should be unique for each user
            'password'=> ['required',Password::min(8)->letters()->numbers()->mixedCase()->symbols()],
            'password_confirmation' => 'required|same:password',
            'phone'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:11|max:12'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        // //storing the data in the database
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'phone'=>$request->phone,
            'is_verified' => '0'
        ]);

        // send verification email
        $verification_code = rand(100000, 999999); // generate a random verification code
        $user->verification_code = $verification_code; // save the verification code in the user table
        $user->save();

        $domain = URL::to('/');
        $url = $domain.'/api/user/verify-email/'.$verification_code;

        $data = [
            'name' => $user->name,
            'url' => $url,
        ];

        // Mail::send('Emails', $data, function($message) use ($user) {
        //     $message->to($user->email, $user->name)
        //             ->subject('Verify your email');
        // });

        Mail::to($user->email)->queue(new AccountVerificationMail($data));

        // return response
        return response()->json([
            'msg' => 'User created successfully. Please verify your email to activate your account.',
        ], 201);

    }



    /**
     * Forget password api
     */
    public function forgetPassword(Request $request)
    {

        try
        {
            $user = User::where('email',$request->email)->get();

            if(count($user) > 0)
            // if ($user)
            {

                $token = Str::random(40);
                $domain = URL::to('/');
                $url = $domain.'/reset-password?token='.$token;

                // $data['url'] = $url;
                // $data['email'] = $request->email;
                // $data['title'] = "Password Reset";
                // $data['body'] = "Click on the below link to reset the password";


                // Mail::send('ForgetPasswordMail',['data'=>$data],function($message) use ($data){
                //     $message->to($data['email'])->subject($data['title']);
                // });

                $datetime = Carbon::now()->format('Y-m-d H:i:s');
                PasswordReset::updateOrCreate(
                    ['email' => $request->email],
                    [
                        'email' => $request->email,
                        'token' => $token,
                        'created_at' => $datetime
                    ]
                );

                // Dispatch the email sending task to a queue
                Mail::to($request->email)->queue(new ForgetPasswordMail($url));

                return response()->json(['success'=>true,'msg'=>'Please check your email to reset password'], 200);

            }
            else
            {
                return response()->json(['success'=>false,'msg'=>'User not found'], 404);
            }
        }
        catch(\Exception $e)
        {
            // return $e;
            return response()->json(['success'=>false,'msg'=>$e->getMessage()]);
        }
    }





    /***
     * Reset Password view load
     */
    public function resetPasswordLoad(Request $request)
    {
        $resetData = PasswordReset::where('token',$request->token)->get();

        if(isset($request->token) && count($resetData) > 0)
        {
            $user = User::where('email',$resetData[0]['email'])->get();
            return view('resetPassword',compact('user'));
        }
        else
        {
            return view('404');
        }
    }

    /***
     * Password reset functionality
     */

     public function resetPassword(Request $request)
     {

        $validator = Validator::make($request->all(),[
            'password'=>['required','confirmed',Password::min(8)->letters()->numbers()->mixedCase()->symbols()]
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $user = User::select('users.*')
                            ->join('password_resets', 'users.email', '=', 'password_resets.email')
                            ->where('password_resets.token', $request->token)
                            ->first();
        if (!$user) {

            return view('EmailVerificationFailed', [
                'msg' => 'User not Found',
                'description' => 'Sorry we cannot reset your password'
            ]);
        }
        $user->password = Hash::make($request->password);
        $user->save();

        $pr = PasswordReset::where('token', $request->token)->first();
        $pr->token = null;
        //$pr->delete();
        $pr->save();

        return view('success', [
            'msg' => 'Successfully Updated Password'
        ]);
     }






    /**
      * Logout api
      */

    public function logout()
    {
        try
        {
            auth()->logout();
            return response()->json(['success'=>true,'msg'=>'User logged out!'], 201);
        }
        catch(\Exception $e)
        {
            return response()->json(['success'=>false,'msg'=>$e->getMessage()], 404);
        }
    }


    /** Fetch users */
    public function fetchUserData()
    {

        // $userData = DB::table('users')->select('users.name', 'users.user_id', 'users.status', 'users.email', 'users.phone')->paginate(5);
        $userData = User::select('name', 'user_id', 'status', 'email', 'phone')->paginate(5);
        $totalUsers = User::count();
        $activeUsers = User::where('status','1')->count();
        $inActiveUsers = User::where('status','0')->count();
        // return response()->json(['userData'=>$userData]);
        return view('appusers',['userData'=>$userData,'totalUsers'=>$totalUsers,'activeUsers'=>$activeUsers,'inActiveUsers'=>$inActiveUsers]);
    }


    /**
     * getting the user ID and storing the mac address in database using the token generated
     */

    public function userMac(Request $request)
    {
          /* Current Login User ID */
        $userID = Auth::user()->user_id;

        //validating the data
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['mac']), [
            'mac'=>'required|macAddress'
        ]);
        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        /* Taking mac as user's input*/
        $macAddress = $request->input('mac');

         /* Check if MAC Address exists in the Bikes Table */
        $bike = Bike::where('mac', $macAddress)->first();

        if ($bike) {
            $bike->user_id = $userID;
            $bike->save();
            return response()->json(['success' => 'true', 'msg' => 'Bike successfully added'],200);
        }

        return response()->json(['success' => 'false', 'msg' => 'Mac not found'],404);

    }


    /** Returns the list of bikes the user has */
    public function bikesList(Request $request)
    {

        /* Current Login User ID */
        $user_id = Auth::user()->user_id;

        $bikes = DB::table('bikes AS b')
                ->select('b.bike_id', 'bu.user_id', 'b.mac', 'b.model', 'b.sub_model', 'b.reg_num', 'b.chassis_id', 'bu.bike_name', 'bu.owner')
                ->join('bike_user AS bu', 'b.bike_id', '=', 'bu.bike_id')
                ->where('bu.user_id', $user_id)
                ->get();
        return response()->json([
            'success' => true,
            'data' => $bikes
        ],200);
    }


    /** Returns the bike stats */
    public function bikeStats ($macAddress){
        /* Current Login User ID */
        $user_id = Auth::user()->user_id;
        $macAddress = "AB:12:34:56:78:9C";
        // Remove colons from the MAC address
        $macAddress = str_replace(':', '', $macAddress);

        // Make a GET request to the bike data URL
        // new instance of the Guzzle client that will be used to make an HTTP GET request to the specified URL
        $user = new Client();
        try {
            $response = $user->request('GET', 'https://instrux.live/electricVehicle/bikes/'.$macAddress.'.json');
            // $response = $user->request('GET', 'https://nedncl.com/electricVehicle/data/'.$macAddress.'.json');
        } catch (ClientException $e) {
            // Catch the ClientException and return the error response
            return response()->json(['msg' => 'File not found'], 404);
        }


        // Parse the JSON response
        $data = json_decode($response->getBody());

        // Extract the data you want to display
        // $bikeData = [
        //     'bike_id' => $data->bike_id,
        //     'battery_level' => $data->battery_level,
        //     'distance_traveled' => $data->distance_traveled,
        //     // Add more fields as needed
        // ];

        // Return the bike data in a JSON response
        // return response()->json($bikeData);
        // return response()->json(['msg'=>'Data found'],200);
        return response()->json($data,200);

    }



    /*** Email Verification at Registration ***/
    public function verifyEmail($verification_code)
    {
        // find the user with the given verification code
        $user = User::where('verification_code', $verification_code)->first();

        if (!$user) {
            // return response()->json([
            //     'msg' => 'Invalid verification code',
            // ], 404);
            return view('EmailVerificationFailed', [
                'msg' => 'Email Verification Failed',
                'description' => 'We are sorry, but we could not verify your email address'
            ]);
        }

        // update the is_verified column in the user table
        $user->is_verified = 1;
        $user->verification_code = null;
        $user->save();

        // return response()->json([
        //     'msg' => 'Email verified successfully'
        // ], 200);
        return view('EmailVerificationSuccessful', [
            'msg' => 'Email Verification Successful',
            'name' => $user->name
        ]);
    }




    public function editPassword(Request $request)
    {

        /* Current Login User ID */
        $user = Auth::user();

        // $validator = Validator::make($request->all(), [
        $validator = Validator::make($request->only(['oldPassword', 'newPassword']), [
            'oldPassword' => 'required',
            'newPassword' => ['required',Password::min(8)->letters()->numbers()->mixedCase()->symbols()],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        if (!Hash::check($request->oldPassword, $user->password)) {
            return response()->json(['error' => 'Current password is incorrect'], 401);
        }

        $user->update([
            'password' => Hash::make($request->newPassword),
        ]);

        return response()->json(['message' => 'Password updated successfully'], 200);

    }

    //===========//
    public function editBike(Request $request)
    {

        /* Current Login User ID */
        $user_id = Auth::user()->user_id;

        $validator = Validator::make($request->only(['bikeName', 'macAddress']), [
            'bikeName' => 'required',
            'macAddress' => 'required',
        ]);

        $mac = $request->macAddress;
        $bikeName = $request->bikeName;

        $bike = Bike::join('bike_user', 'bikes.bike_id', '=', 'bike_user.bike_id')
        ->where('bike_user.user_id', '=', $user_id)
        ->where('bikes.mac', '=', $mac)
        ->first();

        if ($bike) {
            $updateResult = BikeUser::where('id', '=', $bike->id)
            ->update(['bike_name'  => $bikeName]);
            if ($updateResult) {
                return response()->json(['message' => 'Bike name updated successfully']);
            }
            // Bike name updated successfully
        }
        return response()->json([
            'success' => false,
            'msg' => 'Failed to edit name',
        ],401);

    }


    /******* Bike owner data */
    public function ownerData()
    {

            $ownerData = User::select('user_id','name', 'email','cnic', 'phone')->paginate(5);
            // return response()->json(DB::select("select  user_id,name,email,phone from users"));
            return view('bikeSwapCardOwner',['ownerData'=>$ownerData]);

    }


    /** Returns the list of transactions the user has */
    public function transactionsList(Request $request)
    {

        /* Current Login User ID */
        $user_id = Auth::user()->user_id;

        $swapCards = DB::table('swap_card_user')
                    ->select('swap_card_id')
                    ->where('user_id', $user_id)
                    ->get();

        $swapCardIds = array_column($swapCards->toArray(), 'swap_card_id');

        $transactions = DB::table('transactions AS t')
                        ->select('t.transaction_id','t.datetime','t.amount','t.payment_status','t.battery_returned_SOC as battery_taken_SOC','t.battery_issued_SOC as battery_given_SOC','s.s_name','s.address')
                        ->join('stations AS s', 't.station_id', '=', 's.station_id')
                        ->whereIn('swap_card_id', $swapCardIds)
                        ->get();

        return response()->json([
            'success' => true,
            'data' => $transactions
        ],200);
    }

    public function addSwapCard(Request $request)
    {
        $user_id = Auth::user()->user_id;

        $validator = Validator::make($request->all(),[
            'number' => 'required|string',
            'pin' => 'required|integer|digits:4'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        $cardUserPresent = DB::table('swap_card_user AS su')
                            ->select('*')
                            ->join('swap_cards AS sc', 'sc.swap_card_id', '=', 'su.swap_card_id')
                            ->where('sc.number', $request->number)
                            ->where('su.user_id', $user_id)
                            ->first();

        if (!$cardUserPresent) {

            $card = SwapCard::where('number', $request->number)->first();

            if (!$card) {
                // No matching card found
                return response()->json(['error' => 'Invalid Card Number'], 202);
            }
            else {

                $swap_card_id = $card->swap_card_id;
                if (!Hash::check($request->pin, $card->password)) {
                    return response()->json(['error' => 'Invalid PIN'], 202);
                }

                $cardUser = SwapCardUser::create([
                                'swap_card_id'=>$swap_card_id,
                                'user_id'=>$user_id,
                                'swap_card_owner'=>0
                            ]);

                // Valid card details
                return response()->json(['message' => 'Swap Card Added Successfully'], 200);
            }
        }
        else {
            // Card Already Present for user
            return response()->json(['error' => 'Card Already Exists'], 202);

        }

    }

    /** Returns the list of stations for app users */
    public function stationsList()
    {
        /* Current Login User ID */
        $user_id = Auth::user()->user_id;

        $locations = ChargingStation::select('s_name', 'address', 'longitude', 'latitude', 'battery_count')
                            ->get();

        return response()->json([
            'success' => true,
            'data' => $locations
        ],200);
    }

    public function getTable($table)
    {
        try {
            $data = DB::table($table)->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Table not found'], 404);
        }
    }

    public function deleteRow($table, $pk, $id)
    {
        try {
            // Check if the row with the given ID exists
            $row = DB::table($table)->where($pk, $id)->first();

            if (!$row) {
                return response()->json(['error' => 'Row not found'], 404);
            }

            // Delete the row with the given ID
            DB::table($table)->where($pk, $id)->delete();

            return response()->json(['message' => 'Row deleted successfully']);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Row not found or unable to delete: '.$e], 404);
        }
    }

    public function updateColumn($table, $pk, $id, $column, $columnValue)
    {
        try {
            // Check if the row with the given ID exists
            $row = DB::table($table)->where($pk, $id)->first();

            if (!$row) {
                return response()->json(['error' => 'Row not found'], 404);
            }

            // Update the row with the given ID

            // Update the user's image column with the base64 data
            DB::table($table)
                ->where($pk, $id)
                ->update([$column => $columnValue]);

            return response()->json(['message' => 'Column updated successfully']);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Row not found or unable to update: '.$e], 404);
        }
    }

    /***** get login user name */
    public function appUserInfo(Request $request)
    {

        /* Current Login User ID */
        $user_id = Auth::user()->user_id;

        $user = User::where('user_id', $user_id)->select('name', 'phone', 'email', 'image')->first();

        return response()->json(['user_name' => $user->name,
                                'phone_number' => $user->phone,
                                'email' => $user->email,
                                'profile_image' => $user->image
                                ]);
    }


    /**** Uploading user profile image */
    public function uploadProfilePicture(Request $request)
    {
        // $request->validate([
        //     'image' => 'required|string', // Base64 string validation
        // ]);

        $validator = Validator::make($request->only(['image']), [
            'image' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],401);
        }

        $base64Image = $request->input('image');

        // Get the authenticated user
        $user = Auth::user();

        // Update the user's image column with the base64 data
        $user->image = $base64Image;
        $user->save();

        return response()->json(['message' => 'Profile picture updated successfully'],200);
    }


    /*** Swap card list of user */
    public function swapCardList(){

        /* Current Login User ID */
        $userId = Auth::user()->user_id;

        $cardList = SwapCardUser::select('swap_card_user.swap_card_id', 'swap_card_user.user_id', 'swap_cards.number', 'swap_card_user.swap_card_owner')
                                        ->join('swap_cards', 'swap_card_user.swap_card_id', '=', 'swap_cards.swap_card_id')
                                        ->where('swap_card_user.user_id', '=', $userId)
                                        ->get();
        return response()->json([$cardList],200);
    }


    /*****  Edit swap Card pin */
    public function editCardPin(Request $request)
    {
        $validator = Validator::make($request->only(['swap_card_id', 'old_password', 'password', 'password_confirmation']), [
            'swap_card_id' => 'required|exists:swap_cards,swap_card_id',
            'old_password' => 'required',
            'password' => ['required', 'digits:4', 'numeric'], // new password
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg' => $errors], 401);
        }

        $validatedData = $validator->validated();


        // Retrieve the SwapCard by swap_card_id
        $swapCard = SwapCard::find($validatedData['swap_card_id']);

        // Check if the provided old password matches the hashed password
        if (!Hash::check($validatedData['old_password'], $swapCard->password)) {
            return response()->json(['msg' => 'Current PIN is incorrect'], 400);
        }

        // Hash the new password
        $hashedPassword = Hash::make($validatedData['password']);

        // Update the PIN with the new hashed password
        $swapCard->update([
            'password' => $hashedPassword,
        ]);

        return response()->json(['msg' => 'PIN updated successfully'], 200);
    }

}

