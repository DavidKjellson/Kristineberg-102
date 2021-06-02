<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookings;
use Illuminate\Http\Response;

class BookingsController extends Controller
{

    // public function index()
    // {
    //     return response(Bookings::all()->jsonSerialize(), Response::HTTP_OK);
    // }

    public function getBookings()
    {
        $bookedDates = Bookings::all();
        return $bookedDates;
    }

    public function bookDate(Request $request)
    {
        $bookDate = new Bookings();
        $bookDate->start = $request->start;
        $bookDate->end = $request->end;
        $bookDate->name = $request->name;
        $bookDate->save();

        return $bookDate;
        // $bookings = new Bookings([
        //     'start' => $request->input('start'),
        //     'end' => $request->input('end'),
        //     'name' => $request->input('name')
        // ]);
        // $bookings->save();

        // return $bookings;
    }
}
