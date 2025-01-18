<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SwapCard;
use App\Models\SwapCardUser;
use App\Models\Feedback;
use App\Models\Transaction;
use Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;


use Auth;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Models\Battery;

class SwapCardController extends Controller
{
    public function __construct()
    {

        //Setting the guard of login person
        \Config::set('auth.defaults.guard','swap-station-api');

    }

    /**
     * Create swap cards in db
     */

    public function generateUniqueCardNumber(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'quantity' => 'required'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        $quantity = $request->quantity;
        for ($j = 0; $j < $quantity; $j++) {
            // Generate a random integer for last 4 characters
            $randomNumbers = [];
            for ($i = 0; $i < 4; $i++) {
                $randomNumbers[] = random_int(0, 9);
            }

            // Combine the random numbers with the fixed parts of the card number.
            $cardNumber = sprintf("1234-5678-%04d", implode('', $randomNumbers));

            // Check if the generated card number is unique in the database.
            // If not unique, regenerate until it is.
            while (SwapCard::where('number', $cardNumber)->exists()) {
                for ($i = 0; $i < 4; $i++) {
                    $randomNumbers[] = random_int(0, 9);
                }
                $cardNumber = sprintf("1234-5678-%04d", implode('', $randomNumbers));
            }

            // Create and save a new SwapCard model instance.
            $swapCard = new SwapCard(['number' => $cardNumber, 'password' => Hash::make('1234')]);
            $swapCard->save();
        }
        return response()->json(['success'=>true,'msg'=>'Created '.$quantity.' card(s).'], 200);

    }

    /*** Fetch the unassigned swap card numbers */
    public function unAssignedCardNumber()
    {
        try{
            $cardNumbers = SwapCard::select('swap_cards.number')
                                ->leftJoin('swap_card_user', 'swap_cards.swap_card_id', '=', 'swap_card_user.swap_card_id')
                                ->whereNull('swap_card_user.swap_card_id')
                                ->get();
            return response()->json($cardNumbers);
        }catch (\Exception $e) {
            // Handle the exception here, you can log it or return an error response
            return response()->json(['No Unassigned Card Number Found']);
        }
    }

    protected function createNewToken($token){
        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL(), //shows the time in minutes
            'swap_card' => auth()->user(),
        ]);
    }

    public function swapAuth(Request $request)
    {

        $validator = Validator::make($request->only(['number', 'password']), [
        // Validator::make($request->all(),[
            'number' => 'required|string',
            'password' => 'required|integer|digits:4'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        //checking whether password and number matches or not with the database
        if(! $token = auth()->attempt($validator->validated())){
            return response()->json([
                'success'=>false,
                'msg'=>'Invalid Number or PIN'
            ], 401);

        }

        $card = SwapCard::where('number', $request->number)->first();

        if ($card->is_blacklisted) {
            return response()->json([
                'msg' => 'This card has been blacklisted'
            ], 403);
        }


        // //token is generated when the number and pin matches with the database
        return $this->createNewToken($token);

    }

    public function checkBattery(Request $request)
    {
        $swapCardId = Auth::user()->swap_card_id;
        $validator = Validator::make($request->all(),[
            'X_battery_id' => 'required',
            'X_voltage' => 'required',
            'X_SOC' => 'required',
            'Y_SOC' => 'required'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        $battery = Battery::where('mac',$request->X_battery_id)->first();


        if($battery === null)
        {
            return response()->json([
                'success'=>false,
                'msg'=>'Battery doesnot exist'
            ], 401);
        }

        //Check if this battery is blacklisted
        if($battery->is_blacklisted)
        {
            return response()->json([
                'success'=>false,
                'msg'=>'This battery has been blacklisted'
            ], 401);
        }

        //Check if this battery is issued to the given swapcard
        //commenting below for testing
        /*
        $battery_transaction = Transaction::where('battery_issued_id',$battery->battery_id)
                                            ->latest('transaction_id')
                                            ->first();

        if($battery_transaction === null)
        {
            return response()->json([
                'success'=>false,
                'msg'=>'Battery not issued yet'
            ], 401);
        }

        //check if this battery has been returned by this user
        if($battery_transaction->swap_card_id != $swapCardId)
        {
            return response()->json([
                'success'=>false,
                'msg' => 'The battery is not issued to this card'
            ], 401);
        }

        // $battery_returned = Transaction::where('battery_returned_id',$battery->battery_id)
        //                 ->where('swap_card_id',$swapCardId)
        //                 ->where('transaction_id','>',$battery_transaction->transaction_id)
        //                 ->first();

        $battery_returned = Transaction::where('battery_returned_id',$battery->battery_id)
                        ->where('swap_card_id',$swapCardId)
                        ->where('transaction_id','>',$battery_transaction->transaction_id)
                        ->first();

        if($battery_returned){
            return response()->json([
                'success'=>false,
                'msg'  => 'This battery is already returned'
                ], 401);
        }*/

        //Now we are sure that battery is given to this card
        //Sanity Check i.e. parameters in range
        $voltage = $request->X_voltage;
        $XSOC = $request->X_SOC;

        if(!(($voltage>=0 && $voltage<=90) && ($XSOC>=0 && $XSOC<=100))){
            return response()->json([
                'success'=>false,
                'msg' => 'The battery failed Sanity Check'
                ], 401);
        }

        $YSOC = $request->Y_SOC;
        $amount = SwapCardController::calculatePayment($XSOC, $YSOC);
        return response()->json([
            'success'=>true,
            'msg'=>'This battery is allowed for transaction',
            'amount'=> $amount
        ], 200);

    }

    public function calculatePayment($XSOC, $YSOC)
    {
        $cost = 1; //unit cost
        $rate = 0; //fixed rate
        $diff = $YSOC - $XSOC;
        $amount = $cost * $diff + $rate;
        return $amount;
    }

    public function savePaymentDetails(Request $request)
    {
        try {

            $swapCardId = Auth::user()->swap_card_id;


            $validator = Validator::make($request->all(),[
                'station_id' => 'required|integer',
                'amount' => 'required',
                'payment_status' => 'required|string',
                // 'battery_returned_id' => 'required|integer',
                'battery_returned_id' => 'required|string',
                'battery_returned_SOC' => 'required|integer',
                // 'battery_issued_id' => 'required|integer',
                'battery_issued_id' => 'required|string',
                'battery_issued_SOC'=>'required|integer'
            ]);

            if ($validator->fails()) {
                $errors = [];
                foreach ($validator->errors()->all() as $error) {
                    $errors[] = $error;
                }
                return response()->json(['msg'=>$errors], 401);
            }

            $battery_returned_mac_id = Battery::where('mac',$request->battery_returned_id)->first();
            $battery_issued_mac_id = Battery::where('mac',$request->battery_issued_id)->first();


            $transactionData = [
                "station_id" => $request->station_id,
                "swap_card_id" => $swapCardId,
                "amount" => $request->amount,
                "payment_status" => $request->payment_status,
                // "battery_returned_id" => $request->battery_returned_id,
                "battery_returned_id" => $battery_returned_mac_id->battery_id,
                "battery_returned_SOC" => $request->battery_returned_SOC,
                // "battery_issued_id" => $request->battery_issued_id,
                "battery_issued_id" => $battery_issued_mac_id->battery_id,
                "battery_issued_SOC" => $request->battery_issued_SOC,
                'datetime' => now(), // Set the server's datetime
            ];
            $transaction = new Transaction($transactionData);
            $transaction->save();
            return response()->json(['msg' => 'Payment details saved successfully'], 200);

        }catch (\Exception $e) {
        // Handle the exception and return an error response
        return response()->json(['error' => 'Failed to save payment details. Error: ' . $e->getMessage()], 500);
        }
    }

    public function authenticateAdmin(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        $password = $request->password;
        if ( $password == '12345')
        {
            return response()->json([
                'msg' => 'Admin Access Granted'
            ], 200);
        }
        else
        {
            return response()->json([
                'msg' => 'Access Denied for Admin'
            ], 403);
        }

    }

    /****** save feedback of SS */
    public function feedback(Request $request){

        $swapCardId = Auth::user()->swap_card_id;

        $validator = Validator::make($request->only(['status']), [
            // 'swap_card_id'=>'required',
            'status'=>'required|string'
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->all() as $error) {
                $errors[] = $error;
            }
            return response()->json(['msg'=>$errors], 401);
        }

        //storing the data in the database
        $feedback = Feedback::create([
            'swap_card_id'=>$swapCardId,
            'feedback'=>$request->status
        ]);


        return response()->json([
            'msg' => 'Thank You',
            'message' => 'We will use your feedback to improve our customer support performance.'
        ], 200);
    }

    /***Logout from the SS software */
    public function logout()
    {
        try
        {
            auth()->logout();
            return response()->json(['success'=>true,'msg'=>'Logout successful! Thank you for using AIM Swap Station.'], 201);
        }
        catch(\Exception $e)
        {
            return response()->json(['success'=>false,'msg'=>$e->getMessage()], 404);
        }
    }




}
