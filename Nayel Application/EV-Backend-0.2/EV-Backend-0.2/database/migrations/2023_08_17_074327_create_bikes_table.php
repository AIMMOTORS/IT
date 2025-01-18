<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBikesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bikes', function (Blueprint $table) {
            $table->id('bike_id');
            $table->string('mac', 17)->unique();
            $table->string('model');
            $table->string('sub_model');
            $table->string('reg_num')->unique();
            $table->string('chassis_id')->unique();
            $table->smallInteger('model_year');
            $table->date('date_of_purchase');
            $table->string('color')->nullable();
            $table->string('number_plate')->nullable();
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
        Schema::dropIfExists('bikes');
    }
}
