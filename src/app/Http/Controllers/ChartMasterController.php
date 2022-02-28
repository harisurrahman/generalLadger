<?php

namespace App\Http\Controllers;
use App\Models\ChartMaster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $result = ChartMaster::where("id", $request->id)->update(["gl_name" => $request->gl_name]);
        return $result ? response(["message" => "success"]) : response(["message" => "failed"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
    }
}
