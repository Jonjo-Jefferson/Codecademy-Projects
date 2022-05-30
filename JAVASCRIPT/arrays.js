const hobbies = ['gym', 'gaming', 'potato'];

console.log(hobbies);

///

const famousSayings = [
  'Fortune favors the brave.',
  'A joke is a very serious thing.',
  'Where there is love there is life.',
];

const listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);

// Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// .length Property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// .push() method

const choresPush = ['wash dishes', 'do laundry', 'take out trash'];
console.log(choresPush);

choresPush.push('gamer', 'sausage');
console.log(choresPush);

// .pop() method

const chores = [
  'wash dishes',
  'do laundry',
  'take out trash',
  'cook dinner',
  'mop floor',
];

chores.pop();
console.log(chores);

// More Array Methods

// !shift()
const groceryListShift = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

groceryListShift.shift();
console.log(groceryListShift);

// !unshift()
const groceryListUnshift = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

groceryListUnshift.unshift('popcorn');
console.log(groceryListUnshift);

// !slice()

const groceryListSlice = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

console.log(groceryListSlice.slice(1, 4));
console.log(groceryListSlice);

// !indexof()

const groceryListIndex = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

const pastaIndex = groceryListIndex.indexOf('pasta');
console.log(pastaIndex);

// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  arr[3] = 'MUTATED';
}

changeArr(concept);
