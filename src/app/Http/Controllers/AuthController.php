<?php

namespace App\Http\Controllers;

use App\helpers\DBUtils;
use App\Models\ChartMaster;
use App\Models\SystemSettings;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Display User assentials and tocken
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {

        $request->validate([
            "email" => ["required", "email"],
            "password" => ["required"],
        ]);
        $user = User::where("email", $request->input('email'))->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken("create_my_app_token")->plainTextToken;
                $system = json_decode($this->getSystemSetting()) ?? [];
                $chart_of_ac = ChartMaster::getCOFforAuthed($user->id) ?? [];
                //$chart_of_ac = DBUtils::dbResult($result);

                return response(compact("user", "token", "system", "chart_of_ac"), 200);
            }
        }
        return response(["message" => "Invalid user or password"], 401);

    }

    private function getSystemSetting()
    {
        return SystemSettings::all()->pluck('defaults')->first();
    }

    /**
     * Remove the specified token from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
