<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telephone' => 'required|string|max:15',
            'company' => 'nullable|string|max:255',
            'help' => 'nullable|string|max:255',
        ]);

        return response()->json(['message' => 'Form submitted successfully!'], 200);
    }
}
