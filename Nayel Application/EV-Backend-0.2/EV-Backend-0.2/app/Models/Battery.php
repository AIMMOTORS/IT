<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Battery extends Model
{
    use HasFactory;

    public $table = 'batterys';
    protected $primaryKey = 'battery_id';

    protected $fillable = [
        'mac',
        'password',
        'date_of_sale',
        'number_of_chargings',
        'deep_cycle_limit',
        'BPI',
        'is_blacklisted'
    ];

}
