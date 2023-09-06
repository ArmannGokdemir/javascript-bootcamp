"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest == true) {
  passTest = false;
}

strict mode last
*/

/*
// declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
let age = calcAge1(1999);
console.log(calcAge1(1999));
//expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log(calcAge2(1000));
functions
*/
/*
//Arrow Function
const calcAge3 = (birthyear) => 2037 - birthyear;

const yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1999));
*/

/*
let koalasScore = 0;
let dolphinsScore = 0;

const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

function checkWinner(avgDolphinsScore, avgKoalasScore) {
  if (avgDolphinsScore >= avgKoalasScore * 2)
    return `Dolphins won 🏆 ${avgDolphinsScore} vs ${avgKoalasScore}`;
  else if (avgKoalasScore >= avgDolphinsScore * 2)
    return `Koalas won 🏆 ${avgKoalasScore} vs ${avgDolphinsScore} `;
  else return "no winner";
}

koalasScore = calcAverage(44, 23, 71);
dolphinsScore = calcAverage(65, 54, 49);

console.log(checkWinner(dolphinsScore, koalasScore));

koalasScore = calcAverage(85, 54, 41);
dolphinsScore = calcAverage(23, 34, 47);

console.log(checkWinner(dolphinsScore, koalasScore));

console.log(checkWinner(350, 100));
*/
/*
const friends = ["Micheal", "Peter", "Steven"];

const years = new Array(1991, 1984, 2008, 2020);
*/
/*

const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Arman");
console.log(friends);
const a = friends.pop();
console.log(a, "aaa");

const itsATryout = friends;

itsATryout[0] = "Kral";
console.log("its a tryout", itsATryout);
console.log("its friends", friends);

console.log(friends.indexOf("Steven")); // if the item isnt in the array it ll return -1
console.log(friends.includes("Steven"));

*/

const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return (billValue * 15) / 100;
  } else {
    return (billValue * 20) / 100;
  }
};
const bills = [125, 555, 44];
const tips = [];
const total = [];
bills.forEach((bill) => {
  tips.push(calcTip(bill));
});

for (let i = 0; i < 3; i++) {
  total[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(total);
