<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BikeUser;

class BikeUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bikeUsersData = [
            [
                'bike_id' => 1,
                'user_id' => 1,
                'owner' => 1,
                'bike_name' => 'Bhai Bike',
            ],
            [
                'bike_id' => 4,
                'user_id' => 1,
                'owner' => 0,
                'bike_name' => 'My Nayel',
            ],
            [
                'bike_id' => 2,
                'user_id' => 2,
                'owner' => 1,
                'bike_name' => 'My Green Nayel',
            ],
            [
                'bike_id' => 3,
                'user_id' => 3,
                'owner' => 1,
                'bike_name' => 'Red Nayel',
            ],
            [
                'bike_id' => 4,
                'user_id' => 3,
                'owner' => 0,
                'bike_name' => 'My Black Nayel',
            ],
            [
                'bike_id' => 4,
                'user_id' => 2,
                'owner' => 1,
                'bike_name' => 'My Green Nayel',
            ],
            [
                'bike_id' => 5,
                'user_id' => 1,
                'owner' => 1,
                'bike_name' => 'Bike-003',
            ],
            // Continue adding other data rows
        ];

        foreach ($bikeUsersData as $bikeUserData) {
            BikeUser::create($bikeUserData);
        }
    }
}
