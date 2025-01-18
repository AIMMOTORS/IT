<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BikeUser extends Model
{
    use HasFactory;

    public $table = 'bike_user';

    protected $fillable = [
        'bike_id',
        'user_id',
        'bike_name',
        'owner'
    ];
}
