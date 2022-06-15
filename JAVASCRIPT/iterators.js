// ! The .forEach() method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

const printFruit = (item) => {
  console.log(`I want to eat a ${item}`);
};

fruits.forEach(printFruit);

// ! The .map() method
const animalsMap = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

// Create the secretMessage array below

const secretMessage = animalsMap.map((letter) => {
  return letter[0];
});

console.log(secretMessage.join(''));

const bigNumbersMap = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbersMap = bigNumbersMap.map((number) => {
  return number / 100;
});

// ! The .filter() method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter((small) => {
  if (small < 250) {
    return true;
  }
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
console.log(smallNumbers);

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

console.log(longFavoriteWords);

// ! The findIndex() method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex((animal) => {
  return animal === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animals.findIndex((aniamlWithS) => {
  if (aniamlWithS[0] === 's') {
    return aniamlWithS;
  }
});

console.log(startsWithS);

// !The reduce() method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return currentValue + accumulator;
}, 10);

console.log(newSum);

// ! Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

const interestingWords = words.filter((word) => {
  return word.length > 5;
});

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

// ! Choose the right iterator

const cities = [
  'Orlando',
  'Dubai',
  'Edinburgh',
  'Chennai',
  'Accra',
  'Denver',
  'Eskisehir',
  'Medellin',
  'Yokohama',
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, 'C');

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);
