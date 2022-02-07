<?php
namespace App\helpers;

use App\Models\Generator;
use App\Models\System;
use Exception;
use Illuminate\Support\Facades\DB;

class Utility
{

    public function __construct()
    {

    }
    public static function isValidDate($date)
    {
        $system = System::find(1);
        $defaults = json_decode($system->defaults);
        $DateFormat = $defaults->date_format;

        switch ($DateFormat) {
            case "m-d-Y":
            case "m/d/Y":
            case "m.d.Y":
                return self::validateUSDate($date, $DateFormat);
                break;
            case "d-m-Y":
            case "d/m/Y":
            case "d.m.Y":
                return self::validateUKDate($date, $DateFormat);
                break;
        }
    }

    private static function validateUSDate($date)
    {
        try {
            $needle = ['-', '/', '.'];
            foreach ($needle as $separator) {
                if (strpos($date, $separator) > 0) {
                    break;
                }
            }

            $dateSegmnets = explode($separator, $date);

            return checkdate($dateSegmnets[0], $dateSegmnets[1], $dateSegmnets[2]);

        } catch (Exception $e) {
            return false;
        }

    }

    private static function validateUKDate($date)
    {
        try {
            $needle = ['-', '/', '.'];
            foreach ($needle as $separator) {
                if (strpos($date, $separator) > 0) {
                    break;
                }
            }

            $dateSegmnets = explode($separator, $date);

            return checkdate($dateSegmnets[1], $dateSegmnets[0], $dateSegmnets[2]);

        } catch (Exception $e) {
            return false;
        }

    }

    /**
     *
     * @return Generator
     */
    public static function getGlTranNumber()
    {

        Generator::where("generatorName", "journal")->update(["lastSerial" => DB::raw('lastSerial+1')]);
        return Generator::all()->first();


    }

}
