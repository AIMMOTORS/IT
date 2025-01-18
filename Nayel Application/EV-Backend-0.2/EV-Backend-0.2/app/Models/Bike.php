<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bike extends Model
{
    use HasFactory;

    public $table = 'bikes';
    protected $primaryKey = 'bike_id';

    protected $fillable = [
        'mac',
        'model',
        'sub_model',
        'reg_num',
        'chassis_id',
        'model_year',
        'date_of_purchase'
    ];

}
