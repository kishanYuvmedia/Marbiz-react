<?php

namespace App\Http\Controllers;
use App\Models\Master;
use App\Models\RegisterListModel;
use Illuminate\Http\Request;
class RegisterListController extends Controller
{
    public function index()
    {
       $dataList=Master::where('type', '=', 'list')->get();
       $dataSubList=[];
       $selected="";
       return view('addregisterlist',compact('dataList','dataSubList','selected'));
    }
    public function selectMasterList($label)
   {
      $dataList=Master::where('type', '=', 'list')->get();
      $dataSubList=Master::where('type', '=', $label)->get();
      $selected=$label;
      return view('addregisterlist',compact('dataList','dataSubList','selected'));
   }
   public function insertregister(Request $request){
      // dd($request->all());
      $this->validate($request, [
       'category'       =>  'required',
       'subCategory'    =>  'required',
       'name'           =>  'required',
       'contactNumber'  =>  'required',
       'whatsappno'     =>  'required',
       'emailAddress'   =>  'required',
       'about'          =>  'required',
       'price'          =>  'required',
       'image'          =>  'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);
        try {
            $imageName = time().'.'.$request->image->extension();  
            $request->image->move(public_path('images'), $imageName);
            $student = new RegisterListModel([
                'category'        =>  $request->get('category'),
                'subCategory'     =>  $request->get('subCategory'),
                'name'            =>  $request->get('name'),
                'contactNumber'   =>  $request->get('contactNumber'),
                'whatsappno'      =>  $request->get('whatsappno'),
                'email'           =>  $request->get('emailAddress'),
                'city'            =>  $request->get('city'),
                'state'           =>  $request->get('state'),
                'tag'             =>  $request->get('tags'),
                'bio'             =>  $request->get('bio'),
                'price'           =>  $request->get('price'),
                'note'            =>  $request->get('remark'),
                'about'           =>  $request->get('about'),
                'dob'             =>  $request->get('dob'),
                'status'          =>  'Active',
                'userId'          =>  $request->get('userlogin'),
                'profileImage'    =>  $imageName
                 ]);
                 //dd($student);
                 $student->save();
                 return redirect()->route('addregisterlist')->with('success', 'Data Successfully Insert');
          } catch (Exception $e) {
                  return $e;
          }
       
        
 }
   public function registerList()
   {
      $dataList=RegisterListModel::get();
      return view('registerlist',compact('dataList'));
   }
}
