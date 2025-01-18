<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id('transaction_id');
            $table->timestamp('datetime');
            $table->unsignedBigInteger('amount');
            $table->string('payment_status');

            $table->unsignedBigInteger('station_id');
            // Define foreign key
            $table->foreign('station_id')->references('station_id')->on('stations');

            $table->unsignedBigInteger('swap_card_id');
            // Define foreign key
            $table->foreign('swap_card_id')->references('swap_card_id')->on('swap_cards');

            $table->unsignedBigInteger('battery_returned_id');
            // Define foreign key
            $table->foreign('battery_returned_id')->references('battery_id')->on('batterys');
            $table->integer('battery_returned_SOC');

            $table->unsignedBigInteger('battery_issued_id');
            // Define foreign key
            $table->foreign('battery_issued_id')->references('battery_id')->on('batterys');
            $table->integer('battery_issued_SOC');
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
        Schema::dropIfExists('transactions');
    }
}
