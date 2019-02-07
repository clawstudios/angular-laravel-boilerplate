<?php

use Illuminate\Http\Request;

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

// /api/example
Route::group([

    'middleware' => 'api',
    'prefix' => 'example'

], function ($router) {
    // Routes here for ExampleController
    Route::get('', 'Example\ExampleController@get');
    Route::post('', 'Example\ExampleController@create');
    Route::put('', 'Example\ExampleController@update');
    Route::delete('/{id}', 'Example\ExampleController@delete');
});