<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatterysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batterys', function (Blueprint $table) {
            $table->id('battery_id');
            $table->string('mac', 17)->unique();
            $table->string('password');
            $table->date('date_of_sale');
            $table->integer('number_of_chargings');
            $table->integer('deep_cycle_limit');
            $table->double('BPI', 8, 2);
            $table->boolean('is_blacklisted')->default(0);
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
        Schema::dropIfExists('batterys');
    }
}
