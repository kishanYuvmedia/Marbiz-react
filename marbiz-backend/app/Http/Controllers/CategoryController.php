<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Master;
class CategoryController extends Controller
{
    public function index()
    {
       $dataList=Master::where('type', '=', 'Master')->get();
       $dataMasterList=Master::where('type', '<>', 'Master')->get();;
       $dataSubList=[];
       $selected="";
       //dd($dataList);
       return view('category',compact('dataList','dataMasterList','dataSubList','selected'));
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
        return redirect()->route('category')->with('success', 'Data Added');
      }
      public function deleteMaster($id)
      {
         //dd($id);
         $cliente = Master::find($id); 
         $cliente->delete(); //delete the client
         return redirect()->route('category')->with('success', 'Delete successfully');
      }
}
