<?php

namespace App\Http\Controllers;

use App\Models\BaseType;
use App\Models\GlGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GroupAccountController extends Controller
{
    public function index()
    {
        $baseAccounts = BaseType::select('*')->orderBy('type_name', 'asc')->get();
        //$groupAccounts = GlGroup::select('*')->orderBy('group_name')->get();
        $groupAccounts =GlGroup::glGroupsWithSerials();
        return response()->json(compact(["baseAccounts", "groupAccounts"]));
    }

    public function store(Request $request)
    {
        $id = DB::table('gl_group')->insertGetId([
            'group_name' => $request->group_name,
            'type_id' => $request->type_id,
            'created_at' => now()
            
        ]);
        
        return response()->json(['message' => 'Group Account Created Successfully', 'id' => $id], 201);
    }

    public function save(Request $request)
    {
        $id = $request->id;
        $group_name = $request->group_name;
        $type_id = $request->type_id;
        DB::table('gl_group')
            ->where('id', $id)
            ->update([
                'group_name' => $group_name,
                'type_id' => $type_id,
                'updated_at' => now()
            ]);
        return response()->json(['message' => 'Group Account Updated Successfully', 'id' => $id], 200);
    }
}
