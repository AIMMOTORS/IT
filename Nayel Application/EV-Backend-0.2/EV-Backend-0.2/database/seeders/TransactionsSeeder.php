<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Transaction;

class TransactionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $transactionsData = [
            [
                'transaction_id' => 1,
                'datetime' => '2023-08-25 00:33:45',
                'amount' => 1026,
                'payment_status' => 'PAID',
                'station_id' => 1,
                'swap_card_id' => 1,
                'battery_returned_id' => 1,
                'battery_returned_SOC' => 24,
                'battery_issued_id' => 2,
                'battery_issued_SOC' => 95,
            ],
            [
                'transaction_id' => 2,
                'datetime' => '2023-08-26 00:33:45',
                'amount' => 2000,
                'payment_status' => 'PAID',
                'station_id' => 1,
                'swap_card_id' => 1,
                'battery_returned_id' => 2,
                'battery_returned_SOC' => 15,
                'battery_issued_id' => 3,
                'battery_issued_SOC' => 100,
            ],
            [
                'transaction_id' => 3,
                'datetime' => '2023-08-27 00:33:45',
                'amount' => 1700,
                'payment_status' => 'PAID',
                'station_id' => 1,
                'swap_card_id' => 1,
                'battery_returned_id' => 3,
                'battery_returned_SOC' => 10,
                'battery_issued_id' => 1,
                'battery_issued_SOC' => 90,
            ],
            [
                'transaction_id' => 4,
                'datetime' => '2023-04-28 00:33:45',
                'amount' => 785,
                'payment_status' => 'PAID',
                'station_id' => 1,
                'swap_card_id' => 1,
                'battery_returned_id' => 1,
                'battery_returned_SOC' => 60,
                'battery_issued_id' => 2,
                'battery_issued_SOC' => 100,
            ],
            [
                'transaction_id' => 5,
                'datetime' => '2023-09-13 06:40:36',
                'amount' => 5236,
                'payment_status' => 'PAID',
                'station_id' => 2,
                'swap_card_id' => 5,
                'battery_returned_id' => 1,
                'battery_returned_SOC' => 20,
                'battery_issued_id' => 3,
                'battery_issued_SOC' => 100,
            ],
            [
                'transaction_id' => 6,
                'datetime' => '2023-09-15 12:38:39',
                'amount' => 5236,
                'payment_status' => 'PAID',
                'station_id' => 2,
                'swap_card_id' => 5,
                'battery_returned_id' => 3,
                'battery_returned_SOC' => 40,
                'battery_issued_id' => 1,
                'battery_issued_SOC' => 90,
            ],
        ];
        foreach ($transactionsData as $transactionData) {
            Transaction::create($transactionData);
        }
    }
}
