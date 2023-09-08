<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('register_list_models', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('subCategory');
            $table->string('name');
            $table->string('contactNumber');
            $table->string('whatsappno');
            $table->string('email');
            $table->string('city');
            $table->string('state');
            $table->string('tag');
            $table->string('bio');
            $table->string('price');
            $table->string('note');
            $table->string('about');
            $table->date('dob');
            $table->string('status')->default('Active');
            $table->string('userId');
            $table->string('profileImage');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('register_list_models');
    }
}
