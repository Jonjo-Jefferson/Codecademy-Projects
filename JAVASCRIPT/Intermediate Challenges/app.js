// ! Reverse Array() without using built-in method
const sentence = ['sense.', 'make', 'all', 'will', 'This'];

const reverseArray = (arr) => {
  const output = [];
  for (i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
};

// console.log(reverseArray(sentence));

// ! Greet Alients without using built-in method

const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

const greetAliens = (alien) => {
  for (let i = 0; i < alien.length; i++) {
    console.log(
      `Oh powerful ${alien[i]}, we humans offer our unconditional surrender!`
    );
  }
};

// greetAliens(aliens);

// ! convertToBaby() without using built-in method

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = (animal) => {
  let babyAnimals = [];
  for (let i = 0; i < animal.length; i++) {
    babyAnimals.push(`baby ${animal[i]}`);
  }
  return babyAnimals;
};

// console.log(convertToBaby(animals));

// ! Fix the broken code

// const numbers = [5, 3, 9, 30];

// const smallestPowerOfTwo = (arr) => {
//   let results = [];
//   ?? The 'outer' for loop - loops through each element in the array
//   for (let i = 0; i < arr.length; i++) {
//     number = arr[i];

//     ?? The 'inner' while loop - searches for smallest power of 2 greater than the given number
//     i = 1;
//     while (i < number) {
//       i = i * 2;
//     }
//     results.push(i);
//   }
//   return results;
// };

// console.log(smallestPowerOfTwo(numbers));
// ?? Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

const numbersPower = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    console.log(number);
    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

// console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// !declineEverything() and acceptEverything() without direct argument veggies.forEach(politelyDecline);

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

declineEverything(veggies);

const yesIWillAccept = (arr) => {
  console.log(`Ok, I guess I will eat some ${arr}.`);
};

const acceptEverything = (arr) => {
  arr.forEach(yesIWillAccept);
};

acceptEverything(veggies);

// !squareNums()

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:

const squareNums = (arr) => {
  squared = arr.map(toSquare);
  return squared;
};

console.log(squareNums(numbers));

// !shoutGreetings()

// As a function declaration AND using a loop:
function shoutGreetings(arr) {
  let shoutArray = [];
  for (let i = 0; i < arr.length; i++) {
    shoutArray.push(arr[i].toUpperCase() + '!');
  }
  return shoutArray;
}

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));

// !sortYears()
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = (arr) => {
  sorted = arr.sort((a, b) => b - a);
  return sorted;
};

console.log('Sorted ' + sortYears(years));

// !justCoolStuff()

const justCoolStuff = (firstArray, secondArray) =>
  firstArray.filter((item) => secondArray.includes(item));

// function justCoolStuff(firstArray, secondArray) {
//   function isInSecondArray(item) {
//     for (let i = 0; i < secondArray.length; i++) {
//       if (secondArray[i] === item) {
//         return true;
//       }
//     }
//     return false;
//   }
//   return firstArray.filter(isInSecondArray);
// }

const coolStuff = [
  'gameboys',
  'skateboards',
  'backwards hats',
  'fruit-by-the-foot',
  'pogs',
  'my room',
  'temporary tattoos',
];

const myStuff = [
  'rules',
  'fruit-by-the-foot',
  'wedgies',
  'sweaters',
  'skateboards',
  'family-night',
  'my room',
  'braces',
  'the information superhighway',
];

console.log(justCoolStuff(myStuff, coolStuff));

//  !isTheDinnerVegan()

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [
  { name: 'hamburger', source: 'meat' },
  { name: 'cheese', source: 'dairy' },
  { name: 'ketchup', source: 'plant' },
  { name: 'bun', source: 'plant' },
  { name: 'dessert twinkies', source: 'unknown' },
];

console.log(isTheDinnerVegan(dinner));

// !sortSpeciesByTeeth()

const speciesArray = [
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'alligator', numTeeth: 80 },
  { speciesName: 'human', numTeeth: 32 },
];

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
