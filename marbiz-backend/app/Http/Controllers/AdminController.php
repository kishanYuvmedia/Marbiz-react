<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{
    public function showLoginForm()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()->intended(route('admin.dashboard'));
        } else {
            return redirect()->back()->with('error', 'Invalid credentials');
        }
    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }
}
