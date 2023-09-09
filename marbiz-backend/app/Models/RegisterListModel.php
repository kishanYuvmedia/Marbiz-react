<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterListModel extends Model
{
    protected $fillable = ['category','subCategory','name','contactNumber','whatsappno','email','city','state','tag','bio','price','note','about','dob','status','userId','profileImage'];
}
