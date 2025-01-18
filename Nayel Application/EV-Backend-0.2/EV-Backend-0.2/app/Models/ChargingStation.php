<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChargingStation extends Model
{
    use HasFactory;

    public $table = 'stations';
    protected $primaryKey = 'station_id';

    protected $fillable = [
        's_name',
        'address',
        'longitude',
        'latitude'
    ];

}
