<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ChargingStation;

class StationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stationsData = [
            [
                'station_id' => 1,
                's_name' => 'Gulshan-e-Iqbal',
                'address' => 'Gulshan-e-Iqbal,Karachi,Sindh,Pakistan',
                'latitude' => '24.951675',
                'longitude' => '67.113697',
                'created_at' => '2023-03-16 06:06:01',
                'updated_at' => '2023-03-16 06:06:01',
                'battery_count' => 5,
            ],
            [
                'station_id' => 2,
                's_name' => 'Gulistan-e-Johar',
                'address' => 'Gulistan-e-Johar,Karachi,Sindh,Pakistan',
                'latitude' => '24.936018',
                'longitude' => '67.135899',
                'created_at' => '2023-03-16 06:06:55',
                'updated_at' => '2023-03-16 06:06:55',
                'battery_count' => 7,
            ],
            [
                'station_id' => 3,
                's_name' => 'North Nazimabad',
                'address' => 'North Nazimabad,Karachi,Sindh,Pakistan',
                'latitude' => '24.910245',
                'longitude' => '67.077156',
                'created_at' => '2023-03-16 06:08:15',
                'updated_at' => '2023-03-16 06:08:15',
                'battery_count' => 8,
            ],
            [
                'station_id' => 4,
                's_name' => 'North Karachi',
                'address' => 'North Karachi,Karachi,Sindh,Pakistan',
                'latitude' => '24.982650',
                'longitude' => '67.050938',
                'created_at' => '2023-03-16 06:09:25',
                'updated_at' => '2023-03-16 06:09:25',
                'battery_count' => 4,
            ],
            [
                'station_id' => 5,
                's_name' => 'Defense Phase-3',
                'address' => 'Defense Phase-3,Karachi,Sindh,Pakistan',
                'latitude' => '24.940419',
                'longitude' => '67.106035',
                'created_at' => '2023-03-16 06:11:04',
                'updated_at' => '2023-03-16 06:11:04',
                'battery_count' => 2,
            ],
            // Continue adding other data rows
        ];

        foreach ($stationsData as $stationData) {
            ChargingStation::create($stationData);
        }
    }
}
