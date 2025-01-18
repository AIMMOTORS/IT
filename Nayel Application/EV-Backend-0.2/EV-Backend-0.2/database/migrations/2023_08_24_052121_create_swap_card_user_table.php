<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSwapCardUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('swap_card_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('swap_card_id');
            // Define foreign key
            $table->foreign('swap_card_id')->references('swap_card_id')->on('swap_cards');
            $table->unsignedBigInteger('user_id');
            // Define foreign key
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->boolean('swap_card_owner')->default(0);

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
        Schema::dropIfExists('swap_card_user');
    }
}
