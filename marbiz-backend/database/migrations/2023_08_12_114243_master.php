<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class Master extends Migration
{
    public function up()
    {
        Schema::create('masters', function (Blueprint $table) {
            $table->id();
            $table->string('type')->default('Master');
            $table->string('label')->unique();
            $table->string('value');
            $table->string('status')->default('Active');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    public function down()
    {
        Schema::dropIfExists('masters');
    }
}
