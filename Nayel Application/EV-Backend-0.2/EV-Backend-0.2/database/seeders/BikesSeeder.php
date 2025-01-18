<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Bike;

class BikesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bikesData = [
            [
                'bike_id' => 1,
                'mac' => '34:4a:76:35:ef:e2',
                'model' => 'nayel-3.8',
                'sub_model' => 'xyz-748',
                'reg_num' => 'AB527763gb2627',
                'chassis_id' => '5784cd6763AB7373',
                'model_year' => '2012',
                'date_of_purchase' => '2015-10-20',
                'color' => 'black',
                'number_plate' => 'AKZ-001',
                'created_at' => '2023-03-14 05:09:26',
                'updated_at' => '2023-03-14 05:09:26',
            ],
            [
                'bike_id' => 2,
                'mac' => '8C:AA:B5:0A:FB:F6',
                'model' => 'nayel-3.8',
                'sub_model' => 'xyz-748',
                'reg_num' => 'AE527763g47678',
                'chassis_id' => '5784ad6763AB7373',
                'model_year' => '2021',
                'date_of_purchase' => '2022-06-20',
                'color' => 'green',
                'number_plate' => 'AKZ-002',
                'created_at' => '2023-03-14 05:10:13',
                'updated_at' => '2023-03-30 23:37:57',
            ],
            [
                'bike_id' => 3,
                'mac' => 'ab:1c:de:54:64:a5',
                'model' => 'nayel-3.8e',
                'sub_model' => 'abc-172',
                'reg_num' => '5364-7736-6777-7771',
                'chassis_id' => '7373-9822-ab95-6382',
                'model_year' => '2020',
                'date_of_purchase' => '2020-12-31',
                'color' => 'red',
                'number_plate' => 'AKZ-003',
                'created_at' => '2023-03-16 04:51:19',
                'updated_at' => '2023-03-30 23:38:14',
            ],
            [
                'bike_id' => 4,
                'mac' => 'AB:CD:EF:12:34:45',
                'model' => 'Nayel',
                'sub_model' => '3.8',
                'reg_num' => '1234-5678',
                'chassis_id' => '1233-5456-4567-788',
                'model_year' => '2023',
                'date_of_purchase' => '2023-04-06',
                'color' => 'green',
                'number_plate' => 'AKZ-004',
                'created_at' => '2023-04-28 00:33:45',
                'updated_at' => '2023-04-28 00:33:45',
            ],
            [
                'bike_id' => 5,
                'mac' => '60:01:94:44:7B:EA',
                'model' => 'Nayel',
                'sub_model' => '3.8e',
                'reg_num' => '1234-5677',
                'chassis_id' => '1233-5456-4567-888',
                'model_year' => '2023',
                'date_of_purchase' => '2023-04-06',
                'color' => 'green',
                'number_plate' => 'AKZ-005',
                'created_at' => '2023-08-25 15:21:45',
                'updated_at' => '2023-08-25 15:21:45',
            ],
            // Continue adding other data rows
        ];

        foreach ($bikesData as $bikeData) {
            Bike::create($bikeData);
        }
    }
}
