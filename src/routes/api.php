<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
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
Route::post('/users/store', [UserController::class, 'store']);
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/chart-of-accounts', [ChartOfAccountsController::class, 'index']);
    Route::post('/chart-of-accounts/new', [ChartOfAccountsController::class, 'store']);
    Route::put('/chart-of-accounts/:id', [ChartOfAccountsController::class, 'edit']);
    Route::delete('/chart-of-accounts/delete/:id', [ChartOfAccountsController::class, 'delete']);
    Route::get('journal/:id', [JournalController::class, 'get']);
    Route::put('/journal/:id', [JournalController::class, 'save']);
    Route::post('/journal', [JournalController::class, 'store']);

});
