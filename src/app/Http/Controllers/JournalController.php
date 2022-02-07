<?php

namespace App\Http\Controllers;

use App\helpers\Utility;
use App\Http\Controllers\Controller;
use App\Models\TempJournal;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class JournalController extends Controller
{
    private $system;

    public function __construct()
    {
        //$this->setting = new Settings();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createCOF(Request $request)
    {

        $requests = json_decode($request);

        return response(["message"], compact("request"));

        /* $validate = $request->validate([

    ]); */
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCOA(Request $request)
    {

        $data = $request->all();
        $validator = Validator::make($data, [
            "trans.*.gl_account" => "required",
            "trans.*.debit" => "required|numeric|min:0",
            "trans.*.credit" => "required|numeric|min:0",
            "trDate" => "required|date_format:Y-m-d",
        ],
        );

        $validator->validate();
        $journals = $this->prepareJournel($data);
        $message = DB::transaction(function () use ($journals) {
            try {
                TempJournal::insert($journals);
                return 'success';

            } catch (Exception $e) {
                return 'error';
            }
        }

        );
        return response($message === "success" ? "Message: success" : "Message: error", $message === "success" ? 200 : 500);

    }

    private function prepareJournel($data)
    {
        $transections = $data['trans'];
        $created = $data["trDate"];
        $serialObj = Utility::getGlTranNumber();
        $trno = $serialObj->lastSerial;
        $prefix = $serialObj->prefix;

        $entries = [];
        foreach ($transections as $t) {
            $entries[] = ['trno' => "{$prefix}-{$trno}", 'trdate' => $created, 'gl_account' => $t['gl_account'], 'debit' => $t['debit'], 'credit' => $t['credit'], 'created_by' => Auth::user()->id];
        }
        return $entries;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
