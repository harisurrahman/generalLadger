<?php

namespace App\Http\Controllers;

use App\Models\ChartMaster;
use App\Models\GlGroup;
use Illuminate\Http\Request;

class GroupLadgerController extends Controller
{
    public function index()
    {
        $groupLadger = GlGroup::select('*')->orderBy('group_name', 'asc')->get();
        $coa = ChartMaster::select('*')->orderBy('gl_name', 'asc')->get();
        $message = ["success" => "Record retieved"];
        return response()->json(compact(["message","groupLadger", "coa"]), 200);
    }
}
