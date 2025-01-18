<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use App\Models\SwapCard;

class SwapCardsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $swapCardsData = [
            [
                'swap_card_id' => 1,
                'number' => '1234-5678-9123',
                'password' => Hash::make('1234'),
            ],
            [
                'swap_card_id' => 2,
                'number' => '1234-5678-8123',
                'password' => Hash::make('1234'),
            ],
            [
                'swap_card_id' => 3,
                'number' => '1234-5678-7123',
                'password' => Hash::make('1234'),
            ],
            [
                'swap_card_id' => 4,
                'number' => '1234-5678-6123',
                'password' => Hash::make('1234'),
            ],
            [
                'swap_card_id' => 5,
                'number' => '1234-5678-8721',
                'password' => Hash::make('1234'),
            ],
        ];

        foreach ($swapCardsData as $swapCardData) {
            SwapCard::create($swapCardData);
        }
    }
}
