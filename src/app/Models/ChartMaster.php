<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ChartMaster extends Model
{
    use HasFactory;

    protected $table = "chart_master";

    public static function getCOFforAuthed($id)
    {

        $coa = DB::table('users')
            ->join('chart_master_premission', 'chart_master_premission.user_id', '=', 'users.id')
            ->join('chart_master', 'chart_master.gl_account', 'chart_master_premission.gl_account')
            ->join('gl_group', 'gl_group.id', '=', 'chart_master.group_id')
            ->where('users.id', $id)
            ->select('chart_master.id','chart_master.gl_account', 'gl_name', 'group_id', 'group_name')->get();

            return collect($coa)->toArray();

        //return collect($coa)->map(function ($x) {return (array) $x;})->toArray();

    }

}
