<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BikeController;
use App\Http\Controllers\BatteryController;
use App\Http\Controllers\ChargingStationController;
use App\Http\Controllers\SwapCardController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// ADMIN ROUTES
Route::group(['prefix' => 'admin'], function($routes){
    Route::post('/login', [AdminController::class,'login']);
    // Route::post('/register',[AdminController::class,'register']);
    // Route::get('/logout',[AdminController::class,'logout']);
    // Route::post('/bike-details',[BikeController::class,'details']);
    // Route::post('/battery-details',[BatteryController::class,'details']);
    // Route::put('/update-status',[AdminController::class,'updateStatus']);
    // Route::post('/station-details',[ChargingStationsController::class,'details']);
    // Route::delete('/users/{user}', [UserController::class, 'destroyUser'])->name('users.destroy');
    // Route::delete('/bikes/{bike}', [BikeController::class, 'destroyBike'])->name('bikes.destroy');
    // Route::delete('/batterys/{battery}', [BatteryController::class, 'destroyBattery'])->name('batterys.destroy');
    // Route::delete('/admins/{admin}', [AdminController::class, 'destroyAdmin'])->name('admins.destroy');
    // Route::post('/owner-register',[UserController::class,'bikeOwnerRegister']);
    // Route::get('/owner-data',[UserController::class,'ownerData']);

});

Route::group(['middleware' => ['XSS', 'jwt.role:admin','jwt.auth'], 'prefix' =>'admin'],function($routes){
    Route::get('/admin-data',[AdminController::class,'fetchAdminData']);
    Route::get('/bike-data',[BikeController::class,'bikeData']);
    Route::get('/battery-data',[BatteryController::class,'batteryData']);
    Route::get('/user-data',[UserController::class,'fetchUserData']);
    Route::get('/data',[ChargingStationController::class,'totalCount']);
    Route::get('/chassis-ids', [BikeController::class, 'unAssignedChassisIds']);
    Route::get('/owner-data',[UserController::class,'ownerData']);
    Route::post('/register',[AdminController::class,'register']);
    Route::post('/bike-details',[BikeController::class,'details']);
    Route::post('/owner-register',[BikeController::class,'ownerRegister']);
    Route::post('/battery-details',[BatteryController::class,'details']);
    Route::put('/update-status',[AdminController::class,'updateStatus']);
    Route::post('/station-details',[ChargingStationController::class,'details']);
    Route::delete('/users/{user}', [AdminController::class, 'destroyUser'])->name('users.destroy');
    Route::delete('/bikes/{bike}', [BikeController::class, 'destroyBike'])->name('bikes.destroy');
    Route::delete('/batterys/{battery}', [BatteryController::class, 'destroyBattery'])->name('batterys.destroy');
    Route::delete('/admins/{admin}', [AdminController::class, 'destroyAdmin'])->name('admins.destroy');
    Route::get('/logout',[AdminController::class,'logout']);
    Route::post('/generate-swap-cards',[SwapCardController::class,'generateUniqueCardNumber']);
    Route::get('/card-numbers',[SwapCardController::class,'unAssignedCardNumber']);
});




//USER ROUTES
Route::group(['prefix' => 'user'], function($routes){
    Route::post('/login', [UserController::class,'login']);
    Route::post('/register',[UserController::class,'register']);
    Route::post('/forget-password',[UserController::class,'forgetPassword']);
    Route::get('/verify-email/{remember_token}', [UserController::class,'verifyEmail']);


    // Route::get('/logout',[UserController::class,'logout']);


});
Route::group(['middleware' => ['jwt.role:user','jwt.auth'], 'prefix' => 'user'],function($routes){
    Route::post('/user-mac', [UserController::class,'userMac']);
    Route::get('/logout',[UserController::class,'logout']);
    Route::get('/bikelst',[UserController::class,'bikesList']);
    Route::get('/bike/{macAddress}', [UserController::class,'bikeStats']);
    Route::get('/stationlst',[UserController::class,'stationsList']);
    Route::post('/editbike', [UserController::class,'editBike']);
    Route::post('/editpassword', [UserController::class,'editPassword']);
    Route::get('/transactionlst',[UserController::class,'transactionsList']);
    Route::post('/addswapcard',[UserController::class,'addSwapCard']);
    Route::get('/appusername',[UserController::class, 'appUserInfo']);
    Route::post('/profilepicture',[UserController::class, 'uploadProfilePicture']);
    Route::get('/swapcardlst',[UserController::class,'swapCardList']);
    Route::post('/editCardPin',[UserController::class, 'editCardPin']);
});


//SWAP STATION ROUTES
Route::group(['prefix' => 'swap-card'], function($routes){
    Route::post('/auth', [SwapCardController::class,'swapAuth']);
    Route::post('/checkAdmin',[SwapCardController::class,'authenticateAdmin']);


});
Route::group(['middleware' => ['jwt.role:swap-card','jwt.auth'], 'prefix' => 'swap-card'],function($routes){
    Route::post('/checkBattery', [SwapCardController::class,'checkBattery']);
    Route::post('/payment',[SwapCardController::class,'calculatePayment']);
    Route::post('/savePayment',[SwapCardController::class,'savePaymentDetails']);
    Route::post('/customerfeedback',[SwapCardController::class,'feedback']);
    Route::get('/logout',[SwapCardController::class,'logout']);
});

//table data routes for debugging
Route::group(['prefix' => 'table'], function($routes){
    Route::get('/get-data/{table}', [UserController::class,'getTable']);
    Route::get('/edit-data/{table}/{pk}/{id}/{column}/{columnValue}', [UserController::class, 'updateColumn']);
    Route::delete('/delete/{table}/{pk}/{id}', [UserController::class, 'deleteRow']);
});
