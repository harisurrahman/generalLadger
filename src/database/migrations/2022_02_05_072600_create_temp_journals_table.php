<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempJournalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_journels', function (Blueprint $table) {
            $table->id();
            $table->string('trno', 15);
            $table->string('gl_account');
            $table->decimal('debit', 8, 3);
            $table->decimal('credit', 8, 3);
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('approved_by')->nullable();
            $table->boolean('posted')->nullable();
            $table->date('posted_at')->nullable();
            $table->date('trdate');
            $table->timestamps();

            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('approved_by')->references('id')->on('users');
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
        Schema::dropIfExists('temp_journels');
    }
}
