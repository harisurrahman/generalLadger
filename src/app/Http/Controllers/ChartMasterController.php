<?php

namespace App\Http\Controllers;

use App\Models\BaseType;
use App\Models\ChartMaster;
use App\Models\GlGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Exception;

class ChartMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCOA()
    {
        $chart_of_ac = ChartMaster::getCOFforAuthed(Auth::user()->id);
        return response([compact("chart_of_ac", )]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         
        $message = DB::transaction(function () use ($request) {
            $gl_name = $request->gl_name;
            $group_id = $request->group_id;
            //$gl_account = $request->gl_account;
            $created_at = now();
            $gl_name = $request->gl_name;
            try{
                $bt = DB::table('base_types')
                ->join('gl_group', 'base_types.id', '=', 'gl_group.type_id')
                ->where('gl_group.id', $group_id)->first();
                
                $serial = $bt->account_serial+10;
                //return $serial;   
                
                DB::table('base_types')->where('id', $bt->type_id)->update(["account_serial"=>$serial]);
                $id = DB::table('chart_master')->insertGetId([
                    'gl_name' => $gl_name,
                    'group_id' => $group_id,
                    'gl_account' => $serial,
                    'created_at' => $created_at
                ]);
                return ["success" => "Record inserted", "id" => $id];
            }
            catch(Exception $e){
                return ["error" => $e->getMessage()];
            }
        });
        //return response($message]);
        return response()->json(['message' => $message], 201);
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function save(Request $request)
    {
        try{
            ChartMaster::where("id", $request->id)->where("group_id", $request->group_id)
            ->update(["gl_name" => $request->gl_name, 'updated_at' => now()]);
            $message =['success' => 'Record Updated Successfully', 'id' =>'update'];
            $status = 200;
        }catch (Exception $e) {
            $status = 500;
            $message = ['error' => $e->getMessage()];
        }
        
        return response()->json(["message" =>$message], $status);
            
        
    }

    
}
