<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    public $table = 'transactions';
    protected $primaryKey = 'transacrtion_id';

    protected $fillable = [
        'datetime',
        'amount',
        'swap_card_id',
        'station_id',
        'payment_status',
        'battery_returned_id',
        'battery_returned_SOC',
        'battery_issued_id',
        'battery_issued_SOC'
    ];


}
