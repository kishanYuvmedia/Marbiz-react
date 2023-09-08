<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Enquiry extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enquirys', function (Blueprint $table) {
            $table->id();
            $table->string('userId')->default('0');
            $table->string('fullname');
            $table->string('mobilenumber');
            $table->string('email');
            $table->string('subject');
            $table->string('requirmentById');
            $table->string('budgets');
            $table->string('status');
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
        Schema::dropIfExists('enquirys');
    }
}
