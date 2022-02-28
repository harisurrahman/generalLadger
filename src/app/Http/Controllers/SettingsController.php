<?php

namespace App\Http\Controllers;

use App\Models\BaseType;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function baseAccounts()
    {
        return BaseType::select('*')->orderBy('type_name', 'asc')->get();
    }
}
