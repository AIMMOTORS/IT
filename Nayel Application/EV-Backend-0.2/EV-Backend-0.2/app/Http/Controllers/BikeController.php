<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Bike;
use App\Models\User;
use App\Models\BikeUser;
use App\Models\SwapCardUser;
use App\Models\SwapCard;
// use Validator;
use Illuminate\Support\Facades\Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Mail;
// use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Response;
use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Mail\LoginCredentialsMail;

class BikeController extends Controller
{
    public function __construct()
    {

        //Setting the guard of login person
        \Config::set('auth.defaults.guard','admin-api');


    }


    public function bikeView()
    {
        return view('bike');
    }

    /**
     * Entering Bike Details
     */


     public function details(Request $request)
     {

        // $validator = Validator::make($request->all(),[
            $validator = Validator::make($request->only(['mac', 'model', 'sub_model', 'reg_num', 'chassis_id', 'model_year', 'date_of_purchase']), [
             'mac'=>'required|macAddress|unique:bikes',
             'model'=>'required|string',
             'sub_model'=> 'required|string',
             'reg_num' => 'required|string|unique:bikes',
             'chassis_id'=>'required|string|unique:bikes',
             'model_year'=>'required|integer|min:1900|max:2099',
             // 'date_of_purchase' => 'required|date_format:d-m-Y|date_format:d/m/Y|date_format:Y-m-d|date_format:Y/m/d',
            'date_of_purchase' => [
                'required',
                function ($attribute, $value, $fail) {
                    $formats = ['d-m-Y', 'd/m/Y', 'Y/m/d', 'Y-m-d'];
                    // $formats = ['Y-m-d'];
                    $validFormat = false;
                    foreach ($formats as $format) {
                        $date = \DateTime::createFromFormat($format, $value);
                        if ($date !== false && $date->format($format) === $value) {
                            $validFormat = true;
                            break;
                        }
                    }
                    if (!$validFormat) {
                        $fail("The $attribute field does not match any of the supported date formats: d-m-Y, d/m/Y, Y-m-d, Y/m/d");
                    }
                }
            ],
         ]);
         if($validator->fails()){
             return response()->json($validator->errors());

         }


        $formats = ['d-m-Y', 'd/m/Y', 'Y/m/d', 'Y-m-d'];
        // $formats = ['Y-m-d'];
        $dateOfPurchase = null;
        foreach ($formats as $format) {
            $date = \DateTime::createFromFormat($format, $request->date_of_purchase);
            if ($date !== false) {
                $dateOfPurchase = $date->format('Y-m-d');
                break;
            }
        }
         $bike = Bike::create([
             'mac'=>$request->mac,
             'model'=>$request->model,
             'sub_model'=>$request->sub_model,
             'reg_num'=>$request->reg_num,
             'chassis_id'=>$request->chassis_id,
             'model_year'=>$request->model_year,
            //  'date_of_purchase'=>$request->date_of_purchase
            'date_of_purchase' => $dateOfPurchase,

         ]);

         return response()->json([
             'msg'=>'Details Entered Successfully',
             'Bike_Details'=>$bike
         ]);
     }

    /** Fetch list of bikes on dashboard */
    public function bikeData()
    {

            // $bikeData = DB::table('bikes')->select('bike_id','model', 'sub_model', 'model_year','mac','reg_num','chassis_id')->paginate(5);
            $bikeData = Bike::select('bike_id', 'model', 'sub_model', 'model_year', 'mac', 'reg_num', 'chassis_id')
                                ->paginate(5);
            // return response()->json(DB::select("select  bike_id,model, sub_model,model_year,mac,reg_num,chassis_id from bikes"));
            return view('bike',['bikeData'=>$bikeData]);

    }



    /** Deleting the bike details  */
    public function destroyBike(Bike $bike)
    {
        try {
            // Delete the bike record
            $bike->delete();

            // Return a success message
            return response()->json(['msg' => 'Bike record deleted']);
        } catch (ModelNotFoundException $e) {
            // Handle bike not found in the database
            return response()->json(['msg' => 'Bike not found'], Response::HTTP_NOT_FOUND);
        } catch (QueryException $e) {
            // Handle database connection failure or unknown database error
            return response()->json(['msg' => 'Something went wrong. Please try again'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }




    /*** Fetch the unassigned chassis ids */
    public function unAssignedChassisIds()
    {
        try {
            $chassisIds = Bike::select('bikes.chassis_id')
                                ->leftJoin('bike_user', 'bikes.bike_id', '=', 'bike_user.bike_id')
                                ->whereNull('bike_user.bike_id')
                                ->get();

            return response()->json($chassisIds);
        } catch (\Exception $e) {
            // Handle the exception here, you can log it or return an error response
            return response()->json(['No Unassigned Chassis Id Found']);
        }
    }






    /****** Bike owner and swap card Owner details  */
    public function ownerRegister(Request $request)
    {
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['person','name', 'email', 'phone', 'cnic']), [
            // 'person'=>'required|string',//bike owner or swap card ownwer
            'person' => 'required|string|in:Bike Owner,Swap Card Owner',
            'name'=>'required|string|min:2|max:100', //name shoud be minimum of two characters
            'email'=>'required|string|email|max:100|unique:users', //email should be unique for each admin
            'phone'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:11|max:12',
            'cnic'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:15|max:15|unique:users'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        // Generate a random password
        $randomPassword = Str::random(10); // Generate a 10-character random password

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>Hash::make($randomPassword),
            'cnic'=>$request->cnic,
            'is_verified' => 1,
        ]);

        if($request->person === 'Bike Owner'){

            $validator = Validator::make($request->only(['bike_name','chassis_id']), [
                'bike_name'=>'required|string',
                'chassis_id'=>'required|string',
            ]);
            if($validator->fails()){
                return response()->json($validator->errors());
            }

            // Find the bike based on the provided chassis_id
            $bike = Bike::where('chassis_id', $request->chassis_id)->first();

            // Update the owner of the bike in the BikeUser table
            BikeUser::create([
                'user_id' => $user->user_id,
                'bike_id' => $bike->bike_id,
                'bike_name'=>$request->bike_name,
                'owner' => 1,
            ]);

        }
        else{

            $validator = Validator::make($request->only(['number']), [
                'number'=>'required|string',
            ]);
            if($validator->fails()){
                return response()->json($validator->errors());
            }

            // Find the bike based on the provided chassis_id
            $swapCard = SwapCard::where('number', $request->number)->first();

            // Update the owner of the bike in the BikeUser table
            SwapCardUser::create([
                'user_id' => $user->user_id,
                'swap_card_id' => $swapCard->swap_card_id,
                'swap_card_owner' => 1,
            ]);
        }

        $ownerCrendentialsData = [
            'name' => $user->name,
            'email' => $user->email,
            'randomPassword' => $randomPassword,
        ];

        Mail::to($user->email)->queue(new LoginCredentialsMail($ownerCrendentialsData));
        // Mail::send('loginCredentialsMail', $ownerCrendentialsData, function($message) use ($user) {
        //     $message->to($user->email, $user->name)
        //             ->subject('Nayel App Credentials');
        // })

        return response()->json([
            'msg'=>'Email has been successfully sent.'
        ], 201);
    }
}
