<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BaseType extends Model
{
    use HasFactory;
    protected $table = 'base_types';

    public static function groupSerial($id)
    {
        return DB::table('base_types')->join('gl_group', 'base_types.id', '=', 'gl_group.type_id')
       ->select(DB::raw('account_serial +10'))->where('base_types.id', '=', $id)->get();
    }
}