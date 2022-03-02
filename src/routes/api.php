<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ChartMasterController;
use App\Http\Controllers\GroupAccountController;
use App\Http\Controllers\GroupLadgerController;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', [AuthController::class, 'login']);
Route::get("/test", [ChartMasterController::class, 'test']);
Route::middleware('auth:sanctum')->group(function () {

    Route::prefix('/user')->group(function () {
        Route::post('/add', [UserController::class, 'store']);
        Route::get('/get', [UserController::class, 'index']);
    });

    Route::prefix('/chart-master')->group(function () {
        Route::get('/', [ChartMasterController::class, '/']);
        Route::post('/', [ChartMasterController::class, 'store']);
        Route::put('/', [ChartMasterController::class, 'save']);
       
    });

    /* Route::get('/chart-of-accounts', [ChartMasterController::class, 'getCOA']);
    Route::post('/chart-of-accounts', [ChartMasterController::class, 'store']);
    Route::put('/chart-of-accounts', [ChartMasterController::class, 'update']);
    Route::delete('/chart-of-accounts/delete/:id', [ChartMasterController::class, 'delete']);
    Route::prefix('/journal')->group(function () {
        Route::get('journal/:id', [JournalController::class, 'get']);
        Route::put('/journal', [JournalController::class, 'save']);
        Route::post('/journal', [JournalController::class, 'store']);
        
    }); */
    Route::prefix('/group-accounts')->group(function () {
        Route::get('/', [GroupAccountController::class, 'index']);
        Route::post('/', [GroupAccountController::class, 'store']);
        Route::put('/', [GroupAccountController::class, 'save']);
        //Route::put('/', [GroupAccountController::class, 'update']);
        //Route::delete('/', [GroupAccountController::class, 'delete']);
    });
    Route::prefix('/group-ladgers')->group(function () {
        Route::get('/', [GroupLadgerController::class, 'index']);
        Route::post('/', [GroupLadgerController::class, 'store']);
        Route::put('/', [GroupLadgerController::class, 'save']);
        Route::delete('/', [GroupLadgerController::class, 'delete']);
    });


   // Route::get('/account-group', [GlGroupController::class, 'index']);
    

});
