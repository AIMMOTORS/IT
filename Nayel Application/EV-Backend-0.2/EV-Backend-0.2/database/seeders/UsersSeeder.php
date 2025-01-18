<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usersData = [
            [
                'user_id' => 1,
                'name' => 'Talal',
                'email' => 'talalalambhatti@gmail.com',
                'phone' => '0310-2389993',
                'password' => '$2y$10$t/1qPugnBwC2UF7mEM/7ueM5Cq8YXoll4u8ZkP1s6TZPvU8HqRZKK',
                'cnic' => '42101-1578504-7',
                'is_verified' => 1,
                'verification_code' => null,
                'swap_allowed' => 1,
                'status' => 1,
                'created_at' => '2023-04-07 01:17:12',
                'updated_at' => '2023-04-13 22:23:36',
                // 'column_name' => value, // Continue adding other columns
            ],
            [
                'user_id' => 2,
                'name' => 'ayesha',
                'email' => 'ayesha15akhtar3a@gmail.com',
                'phone' => '03126472829',
                'password' => '$2y$10$1EqCsojU8X4JRy7lrGw6DOo1iT3E270CY.eVNF0KeZPms9heTnE3u',
                'cnic' => '42101-1578503-7',
                'is_verified' => 1,
                'verification_code' => null,
                'swap_allowed' => 1,
                'status' => 1,
                'created_at' => '2023-04-13 23:41:02',
                'updated_at' => '2023-04-13 23:41:12',
            ],
            [
                'user_id' => 3,
                'name' => 'mahnoor',
                'email' => 'mahnooratiq2@gmail.com',
                'phone' => '03132284270',
                'password' => '$2y$10$IT./cMAWV8mXaa4fT1bozeurffoYIDpV6wYOCaaUOHpN8pG11fjF.',
                'cnic' => '42101-1578502-7',
                'is_verified' => 1,
                'verification_code' => null,
                'swap_allowed' => 1,
                'status' => 1,
                'created_at' => '2023-05-26 02:45:24',
                'updated_at' => '2023-07-21 00:34:50',
            ],
            [
                'user_id' => 4,
                'name' => 'Muhammad Hashir Bin Khalid',
                'email' => 'mohammadhashirbinkhalid@gmail.com',
                'phone' => '03314843765',
                'password' => '$2y$10$7nqBANNfNs.aofAcb4aRvOsIN9jktHdVLS7zq6LtIX74UrNGU8V6a',
                'cnic' => '42101-1578501-7',
                'is_verified' => 1,
                'verification_code' => null,
                'swap_allowed' => 1,
                'status' => 1,
                'created_at' => '2023-08-04 07:26:38',
                'updated_at' => '2023-08-04 07:27:25',
            ],
            [
                'user_id' => 5,
                'name' => 'Hashim Raza Khan',
                'email' => 'hashimrazakhan@gmail.com',
                'phone' => '03213743422',
                'password' => '$2y$10$c.6Z3wV5TNfeePQJ6NQ7ueWKGC1zkdtlTnAyjeV4E8N7CezH/BwFC',
                'cnic' => '42101-1578500-7',
                'is_verified' => 1,
                'verification_code' => null,
                'swap_allowed' => 1,
                'status' => 1,
                'created_at' => '2023-08-04 10:09:03',
                'updated_at' => '2023-08-04 10:10:15',
            ],
            // Repeat for the rest of the data rows
        ];

        foreach ($usersData as $userData) {
            User::create($userData);
        }
    }
}
