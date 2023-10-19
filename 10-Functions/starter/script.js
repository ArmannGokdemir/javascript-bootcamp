'use strict';

const bookings = [];
const createBooking = function (
  flightnum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  /*
  ES5 way of setting default values
  numPasssengers ||= 1;
  price ||= 199;
*/
  const booking = {
    flightnum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

console.log(bookings);

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', 5, 320);
createBooking('LH123', undefined, 1000);
