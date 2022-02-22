<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ChartMasterController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/user/add', [UserController::class, 'store']);
    Route::get('/chart-of-accounts', [ChartMasterController::class, 'getCOA']);
    Route::post('/chart-of-accounts/new', [ChartMasterController::class, 'store']);
    Route::put('/chart-of-accounts/:id', [ChartMasterController::class, 'edit']);
    Route::delete('/chart-of-accounts/delete/:id', [ChartMasterController::class, 'delete']);
    Route::get('/journal', [JournalController::class, 'store']);
    Route::get('journal/:id', [JournalController::class, 'get']);
    Route::put('/journal/:id', [JournalController::class, 'save']);
    Route::post('/journal', [JournalController::class, 'store']);

});
