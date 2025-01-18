<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChargingStationController;
use App\Http\Controllers\BikeController;
use App\Http\Controllers\BatteryController;





/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/chargingstations', [ChargingStationController::class,'csView']);


Route::get('/admin', [AdminController::class,'adminView']);

Route::get('/bike', [BikeController::class,'bikeView']);

Route::get('/battery', [BatteryController::class,'batteryView']);

Route::get('/appusers', [UserController::class,'appUsersView']);

Route::get('/appusers',[UserController::class,'fetchUserData']);
Route::get('/admin',[AdminController::class,'fetchAdminData']);
Route::get('/bike',[BikeController::class,'bikeData']);
Route::get('/battery',[BatteryController::class,'batteryData']);
Route::get('/chargingstations',[ChargingStationController::class,'totalCount']);

Route::get('/adminsignin', [AdminController::class, 'adminSignInView']);

Route::get('/', [AdminController::class, 'homeView']);

Route::get('/policy', [AdminController::class, 'policyView']);

Route::get('/terms', [AdminController::class, 'termsView']);

Route::get('/reset-password',[UserController::class,'resetPasswordLoad']);
Route::post('/reset-password',[UserController::class,'resetPassword']);


Route::get('/bikeSwapCardOwner', [UserController::class, 'bikeSwapCardOwnerView']);

Route::get('/bikeSwapCardOwner',[UserController::class,'ownerData']);
