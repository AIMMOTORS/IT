<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Battery;

class BatterysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $batterysData = [
            [
                'battery_id' => 1,
                'mac' => 'ab:1c:de:54:64:32',
                'password' => '$2y$10$vlcW38sB.dTmWl2gWxu2puHdKJm/.s4BsvgJJfF9NXgrrgIs2vbeG',
                'date_of_sale' => '2023-04-04',
                'number_of_chargings' => 6,
                'deep_cycle_limit' => 9,
                'BPI' => '7.00',
            ],
            [
                'battery_id' => 2,
                'mac' => 'ab:1c:de:54:a4:66',
                'password' => '$2y$10$LVXu36j5RBAZ/DS58Z30POCBoSz8pJDuNJc9gRx0QYdWC3WbSXe3S',
                'date_of_sale' => '2023-03-28',
                'number_of_chargings' => 3,
                'deep_cycle_limit' => 2,
                'BPI' => '4.00',
            ],
            [
                'battery_id' => 3,
                'mac' => 'ab:1c:de:54:64:a5',
                'password' => '$2y$10$oLJK.Ym90SzYsw9ki.m/UOnn9jFz0qjs4npr30Xn4q8N6O1/otiEm',
                'date_of_sale' => '2023-03-28',
                'number_of_chargings' => 2,
                'deep_cycle_limit' => 9,
                'BPI' => '6.00',
            ],
            [
                'battery_id' => 4,
                'mac' => 'AB:CD:EF:12:67:54',
                'password' => '$2y$10$3Bl3rscrFLskv3gQNJ7FU.sWqs.RTy10HWbAvCitOraKHPlszSFzC',
                'date_of_sale' => '2023-04-12',
                'number_of_chargings' => 0,
                'deep_cycle_limit' => 50,
                'BPI' => '25.00',
                'is_blacklisted' => 1
            ],
            [
                'battery_id' => 5,
                'mac' => 'AB:CD:EF:12:34:56',
                'password' => '$2y$10$Z.AMduGFUfaZGyPdeimcyuKxx0Jg95veqNmP7ZhYbjEVLdoD/wqCO',
                'date_of_sale' => '2023-10-11',
                'number_of_chargings' => 1,
                'deep_cycle_limit' => 2,
                'BPI' => 88,
                'is_blacklisted' => 0,
            ],
            [
                'battery_id' => 6,
                'mac' => 'AB:CD:EF:12:34:57',
                'password' => '$2y$10$2PymcCW0mw2flov6hkA8.uPQRkmkii2VkJbtBymvhb271xciC6HsC',
                'date_of_sale' => '2023-10-11',
                'number_of_chargings' => 1,
                'deep_cycle_limit' => 1,
                'BPI' => 78,
                'is_blacklisted' => 0,
            ],
            [
                'battery_id' => 7,
                'mac' => 'AB:CD:EF:12:34:58',
                'password' => '$2y$10$yxmC.v7pg6fhBEvbl4EEPud7irakel7IqXW5uwBPL.j.X6Ri4cF/S',
                'date_of_sale' => '2023-10-11',
                'number_of_chargings' => 1,
                'deep_cycle_limit' => 50,
                'BPI' => 88,
                'is_blacklisted' => 0,
            ],
            [
                'battery_id' => 8,
                'mac' => 'AB:CD:EF:12:34:59',
                'password' => '$2y$10$eyt9HybG2Jz4RpO50mzKbOMUYKRO4o9nAKppVWzfca5WQXT8B63OK',
                'date_of_sale' => '2023-10-11',
                'number_of_chargings' => 1,
                'deep_cycle_limit' => 50,
                'BPI' => 78,
                'is_blacklisted' => 0,
            ],
            [
                'battery_id' => 9,
                'mac' => 'AB:CD:EF:12:34:61',
                'password' => '$2y$10$SesvMAS1gKrKxPu4Am.M7u6QKCyq5JPG32QdAFylmzIwKVxodZiFW',
                'date_of_sale' => '2023-10-06',
                'number_of_chargings' => 1,
                'deep_cycle_limit' => 50,
                'BPI' => 88,
                'is_blacklisted' => 0,
            ]
        ];

        foreach ($batterysData as $batteryData) {
            Battery::create($batteryData);
        }
    }
}
