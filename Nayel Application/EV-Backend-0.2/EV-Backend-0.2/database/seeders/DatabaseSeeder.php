<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(AdminsSeeder::class);
        $this->call(BatterysSeeder::class);
        $this->call(BikesSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(BikeUsersSeeder::class);
        $this->call(StationsSeeder::class);
        $this->call(SwapCardsSeeder::class);
        $this->call(SwapCardUsersSeeder::class);
        $this->call(TransactionsSeeder::class);

    }
}
