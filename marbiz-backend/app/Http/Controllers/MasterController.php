<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Master;
class MasterController extends Controller
{
   public function index()
   {
      $data=Master::where('type', '=', 'Master')->get();
      return view('master',compact('data'));
   }
   public function insertMaster(Request $request){
     // dd($request->all());
		$this->validate($request, [
         'label'    =>  'required',
         'value'     =>  'required'
     ]);
     $student = new Master([
         'label'    =>  $request->get('label'),
         'value'     =>  $request->get('value'),
     ]);
     $student->save();
     return redirect()->route('master')->with('success', 'Data Added');
   }
   public function deleteMaster($id)
   {
      //dd($id);
      $cliente = Master::find($id); 
      $cliente->delete(); //delete the client
      return redirect()->route('master')->with('success', 'Delete successfully');
   }
   public function selectMasterList($label)
   {
      //dd($label);
      $dataList=Master::where('type', '=', 'Master')->get();
      $dataMasterList=Master::where('type', '<>', 'Master')->get();
      $dataSubList=Master::where('type', '=', $label)->get();
      $selected=$label;
      return view('category',compact('dataList','dataMasterList','dataSubList','selected'));
   }
}
