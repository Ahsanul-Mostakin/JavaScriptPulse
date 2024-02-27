'use strict';

const bookings = [];
const creatBooking = function (
  flightNum,
  numberPassengers = 1,
  price = 199 * numberPassengers
) {
  const booking = {
    flightNum,
    numberPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH1');
creatBooking('LH123', 2, 1000);
creatBooking('LH123', 5);
