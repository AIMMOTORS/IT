<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Battery;
use App\Models\Bike;
use App\Models\User;
use App\Models\ChargingStation;
use Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
// use Illuminate\Support\Facades\DB;

class ChargingStationController extends Controller
{

    public function __construct()
    {

        //Setting the guard of login person
        \Config::set('auth.defaults.guard','admin-api');
    }

    public function csView()
    {
        return view('chargingstations');
    }

    public function details(Request $request)
    {
        $validator = Validator::make($request->all(),[
            's_name'=>'required|string',
            'address'=>'required|string|unique:stations',
            'latitude'=>'required|unique:stations',
            'longitude'=> 'required|unique:stations'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());

        }
        $station = ChargingStation::create([
            's_name'=>$request->s_name,
            'address'=>$request->address,
            'latitude'=>$request->latitude,
            'longitude'=>$request->longitude
        ]);

        return response()->json([
            'msg'=>'Details Entered Successfully',
            'Station_Location'=>$station
        ]);
    }

    public function totalCount()
    {

        $totalBikes = Bike::count();
        $totalBattery = Battery::count();
        $activeUsers = User::where('status','1')->count();
        $totalStations = ChargingStation::count();
            // $locations = DB::table('stations')->get();
        $locations = ChargingStation::all();
            // return response()->json(['totalBikes'=>$totalBikes,'totalBattery'=> $totalBattery,'locations'=>$locations]);
        return view('chargingstations', compact('locations'),['totalBikes'=>$totalBikes, 'totalBattery'=> $totalBattery,'activeUsers'=> $activeUsers,'totalStations'=> $totalStations]);


    }

}
