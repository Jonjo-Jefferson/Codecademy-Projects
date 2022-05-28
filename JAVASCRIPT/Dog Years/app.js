// Set my agee = name
let myAge = 34;
const myName = 'Jonjo Jefferson'.toLowerCase();
// Set early dog years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears, laterYears);

let myAgeInDogYears = earlyYears + laterYears;

console.log(
  `My Name is ${myName}. I am ${myAge} years old which is 
  ${myAgeInDogYears} years old in dog years`
);
