<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MasterController;
use App\http\Controllers\SubMasterController;
use App\http\Controllers\CategoryController;
use App\http\Controllers\RegisterListController;
use App\http\Controllers\EnquiryController;
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

Route::get('/', function () {
    return view('auth/login');
});
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');
Route::get('master', [MasterController::class, 'index'])->name('master');
Route::post('insert-master', [MasterController::class, 'insertMaster'])->name('insertMaster');
Route::get('delete-master/{id}', [MasterController::class, 'deleteMaster'])->name('deleteMaster');

Route::get('submaster', [SubMasterController::class, 'index'])->name('submaster');
Route::post('insert-sub-master', [SubMasterController::class, 'insertMaster'])->name('insertsubMaster');
Route::get('delete-sub-master/{id}', [SubMasterController::class, 'deleteMaster'])->name('deletesubMaster');

Route::get('category', [CategoryController::class, 'index'])->name('category');
Route::post('insert-category', [CategoryController::class, 'insertMaster'])->name('insertcategory');
Route::get('delete-category/{id}', [CategoryController::class, 'deleteMaster'])->name('deletecategory');
Route::get('select-master-list/{label}',[MasterController::class,'selectMasterList'])->name('select-master');

Route::get('addregisterlist', [RegisterListController::class, 'index'])->name('addregisterlist');
Route::post('insert-register', [RegisterListController::class, 'insertregister'])->name('insertregister');
// Route::get('delete-register/{id}', [RegisterListController::class, 'deleteMaster'])->name('deleteregister');
Route::get('select-register-list/{label}',[RegisterListController::class,'selectMasterList'])->name('select-master');
Route::get('registerlist', [RegisterListController::class, 'registerList'])->name('registerlist');

Route::get('enquiry', [EnquiryController::class, 'index'])->name('enquiry');
require __DIR__.'/auth.php';
