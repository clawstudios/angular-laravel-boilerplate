<?php

namespace App\Http\Controllers\Example;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ExampleController extends Controller
{
    /**
     * ExampleController Ctor
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * get
     * 
     * @return Http\JsonResponse
     */
    public function get(Request $request)
    {
        // Do something
        return response()->json([ 'message' => 'This is a GET example.' ]);
    }
  
    /**
     * create
     * 
     * @return Http\JsonResponse
     */
    public function create(Request $request)
    {
        // Do something
        return response()->json([ 'message' => 'This is a POST example. Content: '.$request->content ]);
    }
  
    /**
     * update
     * 
     * @return Http\JsonResponse
     */
    public function update(Request $request)
    {
        // Do something
        return response()->json([ 'message' => 'This is a PUT example. . Content: '.$request->content ]);
    }

    /**
     * delete
     * 
     * @return Http\JsonResponse
     */
    public function delete($id)
    {
        // Do something
        return response()->json([ 'message' => 'This is a DELETE example. Id: '.$id ]);
    }
}
