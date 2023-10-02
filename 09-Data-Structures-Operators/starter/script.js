"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const openingHours = {
  //ES6 Enhanced object literals
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 Enhanced object literals
  openingHours,
  //ES6 enhanced object literals
  order(starterIndex, mainIndex) {
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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
//Working with strings
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane.indexOf("A"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(0, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😔");
  else console.log("You got lucky 📈");
};

checkMiddleSeat("11B");
checkMiddleSeat("11A");

/*
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1
const abcew = weekDays.keys();
console.log([...gameEvents.entries()]);
const events = new Set(gameEvents.values());
console.log("Game events", gameEvents.values());
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);
// 3

console.log(`An event happened every ${90 / gameEvents.size} minutes`);

// 4

for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[First Half] ${key} : ${value}`)
    : console.log(`[Second Half] ${key} : ${value}`);
}

/*
//iterating maps
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

//Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// let answer = "a";
// while (answer !== question.get("correct") && answer !== 0) {
//   answer = Number(prompt("Your answer"));
//   console.log(answer);
//   console.log(question.get(answer === question.get("correct")));
// }
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
/*
//maps
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy"); // set not just only updates the map but it returns the map too
console.log(rest.set(2, "Lisbon, Portugal"));
rest
  .set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
console.log(rest.get("name"));
const time = 21;
console.log(rest.get(time > rest.get("Open") && time < rest.get("Close"))); // not so readeble so dont use it too much arman

console.log(rest.has("categories"));
rest.delete(2);
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));
/*
// Set
// sets dont have duplicates it means that its elements are unique
// different than arrays it doesnt have order inside
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//use case for sets
const staff = ["Waiter", "chef", "Waiter", "manager", "manager"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*

//1
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
//2
let average = 0;
const oddValues = Object.values(game.odds);
for (const value of oddValues) {
  average += value;
}
console.log(`Average of odds equals to ${average / oddValues.length}`);

//3
const oddEntries = Object.entries(game.odds);
for (const [team, oddValue] of oddEntries) {
  const str = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${str} ${oddValue}`);
}
/*
//looping objects
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open for ${properties.length}:`;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);
//Property values
const values = Object.values(openingHours);
console.log(values);

// values and keys together
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close ${close} `);
}

/*
// optional chaining
// optional chaining nearly always used with ?? nullish coalesing operator
//only if monday exists then open gets executed
console.log(restaurant.openingHours.mon?.open);

//Example

const weekDays2 = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

for (const day of weekDays2) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed"; // eğer bir objenin özelliğine erişmek için değişken kullanacaksak . notasyonu yerine [] kullanılır.
  console.log(`On ${day},we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [
  {
    name: "Arman",
    email: "hello@arman.com",
  },
];
console.log(users[0]?.name ?? "User array empty");
/*const restaurant = {
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

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};*/
// restaurant object at the top is an object written with object
// literal syntax and there are 3 more ways to write object literals
// that came with ES6
// Enhanced Object Literals
// console.log(restaurant);
// for of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// can still use continue and break
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i}:${el}`);
  // console.log(`${item[0] + 1}: ${item[1]}`);
}

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1

const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers, "Field Players");
// 3
const allPlayers = [...players1, ...players2];
console.log("All players", allPlayers);
// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("players Final", players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log("team1 draw team2", team1, draw, team2);
// 6
const func = function (...playerNames) {
  console.log(playerNames);
  console.log(`${playerNames.length} goals was scored`);
};
func("alex", "jimenez", "ronaldo");

// 7
team1 > team2 && console.log("team 1 wins 🏆");
team2 > team1 && console.log("team 2 wins 🏆");
// OR assignment operator
// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);

// //nullish operator
// // Nullish = null and undefined NOT(0 , empty string)
// acts like 0 and empty string not falsy
// const guestCorrect = 0 ?? 10;
// console.log(guestCorrect);

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
