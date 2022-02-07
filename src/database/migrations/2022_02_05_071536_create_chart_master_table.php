<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChartMasterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chart_master', function (Blueprint $table) {
            $table->id();
            $table->string('gl_account')->unique();
            $table->string('gl_name')->unique();
            $table->string('gl_group');
            $table->boolean('gl_enabled')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chart_master');
    }
}
