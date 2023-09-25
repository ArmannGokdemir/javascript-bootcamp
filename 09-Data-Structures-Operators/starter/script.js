"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = "20:00",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta ingredients ${ing1}  ${ing2} ${ing3}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

//nullish operator
// Nullish = null and undefined
const guestCorrect = "" ?? 10;
console.log(guestCorrect);

// use Any data type, return any datatype,
//short-circuiting

// OR operator
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log("guests number", guests);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // AND operator
// console.log("----AND----");
// console.log(0 && "Jonas"); // returns false value
// console.log("Jonas" && 0);
// console.log(7 && "Jonas");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("spinach", "mozarella");
// REST because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   var deneme = 2;
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

//spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// // spread operator bütün iterablelarda çalışır , string map set gibi

// const str = "Arman";
// const letters = [...str];
// console.log(letters);
// Real world example
// const ingredients = [
//   prompt("Let 's make pasta ingredient 1?"),
//   prompt("Let 's make pasta ingredient 2?"),
//   prompt("Let 's make pasta ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);
// console.log(ingredients);

// es2018 sonrasında spread objeler ile de çalışmaya başladı
// const newRestaurant = {
//   foundedIn: 1999,
//   ...restaurant,
//   founder: "Arman",
// };
// console.log(newRestaurant);

// //Destructring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // giving default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables;
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// Destructring Arrays
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // switching values
// /*const temp = first;
// first = second;
// second = temp;
// console.log(first, second);*/

// [first, second] = [second, first];
// console.log(first, second);

// //destructuring immediately
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // destructuring nested arrays
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
