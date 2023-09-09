<?php

namespace App\Http\Controllers;
use App\Models\Enquiry;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{
    public function index()
   {
      $data=Enquiry::where('status', '=', 'Pending')->get();
      return view('enquiry',compact('data'));
   }
}
