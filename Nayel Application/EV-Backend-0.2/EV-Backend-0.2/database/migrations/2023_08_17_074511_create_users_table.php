<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('name', 65);
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('password');
            $table->string('cnic')->unique()->nullable();
            $table->boolean('is_verified')->default(0);
            $table->mediumInteger('verification_code')->nullable();
            $table->boolean('swap_allowed')->default(0); #flag to check if the user is allowed to make swap transaction
            $table->boolean('status')->default(1); #user not defaulter etc
            $table->longText('image')->nullable();
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
        Schema::dropIfExists('users');
    }
}
