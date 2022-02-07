<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJournalEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journels_entries', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('type');
            $table->integer('type_no');
            $table->string('check_no')->nullable();
            $table->date('tran_date');
            $table->smallInteger('period');
            $table->string('gl_account');
            $table->string('gl_account_effected');
            $table->boolean('posted')->default(false);
            $table->timestamps();
            $table->foreign('gl_account')->references('gl_account')->on('chart_master');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('journels_entries');
    }
}
