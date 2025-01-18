<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminsData = [
            [
                'admin_id' => 1,
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => '$2y$10$A6VQ9ddtktYElF4fEhrhhOfv6015pPGMpyUfkNIDiB7Oy0ckX55su',
            ],
            [
                'admin_id' => 2,
                'name' => 'Ayesha',
                'email' => 'ayesha15akhtar3a@gmail.com',
                'password' => '$2y$10$D6VkRAr1h9ZDdfr35bBQg.b041XBIaJDgcDlrSwk3q8g0lbgD8tgG',

            ],
            [
                'admin_id' => 3,
                'name' => 'Mahnoor Atiq',
                'email' => 'mahnooratiq2@gmail.com',
                'password' => '$2y$10$LZ4XCQ.TEk9HUPmy1hDl0.VJFtbOaQiEeJO.L/zLbxnUsnPGYq6u6',

            ],
            // Continue adding other data rows
        ];

        foreach ($adminsData as $adminData) {
            Admin::create($adminData);
        }
    }
}
