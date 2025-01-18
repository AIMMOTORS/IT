<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SwapCardUser;

class SwapCardUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $swapCardUsersData = [
            [
                'swap_card_id' => 1,
                'user_id' => 1,
                'swap_card_owner' => 1,
            ],
            [
                'swap_card_id' => 4,
                'user_id' => 1,
                'swap_card_owner' => 0,
            ],
            [
                'swap_card_id' => 2,
                'user_id' => 2,
                'swap_card_owner' => 1,
            ],
            [
                'swap_card_id' => 3,
                'user_id' => 3,
                'swap_card_owner' => 1,
            ],
            [
                'swap_card_id' => 4,
                'user_id' => 3,
                'swap_card_owner' => 0,
            ],
            // Continue adding other data rows
        ];

        foreach ($swapCardUsersData as $swapCardUserData) {
            SwapCardUser::create($swapCardUserData);
        }
    }
}
