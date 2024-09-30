<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Laptop;
use Illuminate\Http\Request;

class LaptopController extends Controller
{
 
    //

    public function index()
    {
        $posts = Laptop::all();
        return response()->json([
            'success' => true,
            'message' => 'Data retrieved successfully',
            'data' => $posts,
        ], 200);
    }

    public function show($id)
    {
        $post = Laptop::findOrFail($id);
        return response()->json($post);
    }
}
