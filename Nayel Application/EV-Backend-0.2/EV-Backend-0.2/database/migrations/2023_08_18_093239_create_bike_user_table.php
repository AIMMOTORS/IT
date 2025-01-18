<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBikeUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bike_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bike_id');
            // Define foreign key
            $table->foreign('bike_id')->references('bike_id')->on('bikes');
            $table->unsignedBigInteger('user_id');
            // Define foreign key
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->boolean('owner')->default(0);
            $table->string('bike_name')->nullable();

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
        Schema::dropIfExists('bike_user');
    }
}
