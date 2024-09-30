// routes/api.php
<?php

// routes/api.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BajuController;
use App\Filament\Resources\BlogResource\Api;
use App\Http\Controllers\Api\ProductController;
use App\Filament\Resources\BlogResource\Api\BlogApiService;
use App\Http\Controllers\Api\LaptopController;


Route::get('/laptops', [LaptopController::class, 'index']);
Route::get('/laptops/{id}', [LaptopController::class, 'show']);

Route::middleware('api')->group(function () {
    Route::get('/laptops', [LaptopController::class, 'index']);
});