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

const flight = 'LH234';
const mostakin = {
  name: 'Ahsanul Mostakin',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr .' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, mostakin);
console.log(flight);
console.log(mostakin);
