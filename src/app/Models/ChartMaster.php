<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ChartMaster extends Model
{
    use HasFactory;
    protected $table = "chart_master";

    public static function getCOA($id)
    {
        $coa = DB::table('users')
            ->join('chart_master_permissions', 'chart_master_permissions.user_id', '=', 'users.id')
            ->join('chart_master', 'chart_master.gl_account', 'chart_master_permissions.gl_account')
            ->where('users.id', $id)
            ->select('chart_master.gl_account', 'gl_name', 'gl_group')->get();
        return collect($coa)->map(function ($x) {return (array) $x;})->toArray();

    }

}
