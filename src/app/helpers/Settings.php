<?php
namespace App\helpers;

use App\Models\System;
use Exception;

class Settings
{

    private static $dateFormat;
    private static $gltranNum;

    public function __construct()
    {
        $system = System::all()->pluck('defaults')->first();
        $system = json_decode($system);
        self::$gltranNum = $system->gltranNo;
        self::$dateFormat = $system->date_format;

    }

    public static function getDateFormat()
    {
        return self::$dateFormat;
    }

    public static function getGlTranNum()
    {
        return self::$gltranNum;
    }

    public static function isValidDate($date)
    {
        $system = System::find(1);
        $defaults = json_decode($system->defaults);

        switch (self::$dateFormat) {
            case "m-d-Y":
            case "m/d/Y":
            case "m.d.Y":
                return self::validateUSDate($date);
                break;
            case "d-m-Y":
            case "d/m/Y":
            case "d.m.Y":
                return self::validateUKDate($date);
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
}
