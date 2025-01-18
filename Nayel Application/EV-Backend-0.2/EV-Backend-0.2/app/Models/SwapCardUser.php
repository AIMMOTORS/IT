<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SwapCardUser extends Model
{
    use HasFactory;

    public $table = 'swap_card_user';

    protected $fillable = [
        'swap_card_id',
        'user_id',
        'swap_card_owner'
    ];
}
