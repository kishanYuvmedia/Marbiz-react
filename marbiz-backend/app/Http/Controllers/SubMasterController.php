<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Master;
class SubMasterController extends Controller
{
    public function index()
    {
       $dataList=Master::where('type', '=', 'Master')->get();
       $dataMasterList=Master::where('type', '<>', 'Master')->get();
       //dd($dataList);
       return view('submaster',compact('dataList','dataMasterList'));
    }
    public function insertMaster(Request $request){
         //dd($request->all());
           $this->validate($request, [
            'label'    =>  'required',
            'value'     =>  'required',
            'type'     =>  'required'
        ]);
        $student = new Master([
            'label'    =>  $request->get('label'),
            'value'     =>  $request->get('value'),
            'type'     =>  $request->get('type'),
        ]);
        $student->save();
        return redirect()->route('submaster')->with('success', 'Data Added');
      }
      public function deleteMaster($id)
      {
         //dd($id);
         $cliente = Master::find($id); 
         $cliente->delete(); //delete the client
         return redirect()->route('submaster')->with('success', 'Delete successfully');
      }
}
