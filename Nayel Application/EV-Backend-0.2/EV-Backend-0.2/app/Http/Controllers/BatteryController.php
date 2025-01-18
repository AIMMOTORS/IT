<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Battery;
use Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
// use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
// use Illuminate\Support\Carbon;
use Carbon\Carbon;

class BatteryController extends Controller
{
    public function __construct()
    {

        //Setting the guard of login person
        \Config::set('auth.defaults.guard','admin-api');

    }

    public function batteryView()
    {
        return view('battery');
    }

    /**
     * Entering Battery Details
     */


    public function details(Request $request)
    {
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['mac', 'password', 'date_of_sale', 'number_of_chargings', 'deep_cycle_limit', 'BPI']), [
            'mac'=>'required|macAddress|unique:batterys',
            'password'=> ['required',Password::min(8)->letters()->numbers()->mixedCase()->symbols()],
            // 'date_of_sale' => 'required|date_format:Y/m/d',
            'date_of_sale' => [
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
                        $fail("The $attribute field does not match any of the supported date formats: d-m-Y, d/m/Y, Y/m/d, Y-m-d");
                    }
                }
            ],
            'number_of_chargings' => 'required|integer',
            'deep_cycle_limit'=>'required|integer',
            'BPI'=>'required|string'

        ]);
        if($validator->fails()){
            return response()->json($validator->errors());

        }

        $formats = ['d-m-Y', 'd/m/Y', 'Y/m/d', 'Y-m-d'];
        // $formats = ['Y-m-d'];
        $dateOfSale = null;
        foreach ($formats as $format) {
            $date = \DateTime::createFromFormat($format, $request->date_of_sale);
            if ($date !== false) {
                $dateOfSale = $date->format('Y-m-d');
                break;
            }
        }


        $battery = Battery::create([
            'mac'=>$request->mac,
            'password'=>Hash::make($request->password),
            // 'date_of_sale'=>$request->date_of_sale,
            'date_of_sale' => $dateOfSale,
            'number_of_chargings'=>$request->number_of_chargings,
            'deep_cycle_limit'=>$request->deep_cycle_limit,
            'BPI'=>$request->BPI

        ]);

        return response()->json([
            'msg'=>'Details Entered Successfully',
            'Battery_Details'=>$battery
        ]);
    }

    /** Fetch list of battery on dashboard */
    public function batteryData()
    {

            // $batteryData = DB::table('batterys')->select('battery_id','mac', 'date_of_sale', 'number_of_chargings','deep_cycle_limit','BPI')->paginate(5);
            $batteryData = Battery::select('battery_id', 'mac', 'date_of_sale', 'number_of_chargings', 'deep_cycle_limit', 'BPI')
                                    ->paginate(5);
            // return response()->json(DB::select("select  mac,date_of_sale,number_of_chargings,deep_cycle_limit,BPI from batterys"));
            return view('battery',['batteryData'=>$batteryData]);

    }



    /** Deleting the battery details  */
    public function destroyBattery(Battery $battery)
    {

        try {
            // Delete the battery record
            $battery->delete();

            // Return a success message
            return response()->json(['msg' => 'Battery record deleted']);
        } catch (ModelNotFoundException $e) {
            // Handle battery not found in the database
            return response()->json(['msg' => 'Battery not found'], Response::HTTP_NOT_FOUND);
        } catch (QueryException $e) {
            // Handle database connection failure or unknown database error
            return response()->json(['msg' => 'Something went wrong. Please try again.'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
}
