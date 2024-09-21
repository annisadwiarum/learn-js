let age = 25;
let year = 2024;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points = 50;
console.log(points);

var score = 50;
console.log(score);

// tes string
console.log("hello world, merhaba");

let email = "annisadwiarum710@gmail.com";
console.log(email);

// string concatenation
let firstName = "Annisa";
let lastName = "Dwi Arum";

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

//string length
console.log(fullName.length);

// string method
console.log(fullName.toLowerCase());

// let result = fullName.toUpperCase();
// console.log(result);

let index = email.indexOf('@');
console.log(index);

//string method
// let result = email.lastIndexOf('a');
let results = email.slice(0, 6);
let result = email.substr(4, 6);
console.log(results);
console.log(result);