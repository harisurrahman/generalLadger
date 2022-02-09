<?php


namespace App\helpers;


class DBUtils
{

    public static function dbResult($result)
    {
        foreach ($result as $row)
        {
            $rows[] = $row;
        }
        return $rows;
    }
}
