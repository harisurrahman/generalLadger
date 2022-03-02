<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class GlGroup extends Model
{
    use HasFactory;
    protected $table = "gl_group";

    public static function glGroupsWithSerials(){
        return DB::table('gl_group')->join('base_types', 'gl_group.type_id', '=', 'base_types.id')
        ->select('gl_group.*','base_types.account_serial')->orderBy('group_name')->get();
    }

}
