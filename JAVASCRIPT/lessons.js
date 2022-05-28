let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

isLocked
  ? console.log('You will need a key to open the door.')
  : console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favoritePhrase === 'Love That!'
  ? console.log('I love that!')
  : console.log("I don't love that!");

/////////////////

// Else if

let season = 'spring';

if (season === 'spring') {
  console.log("It's spring! The trees are budding!");
} else if (season === 'winter') {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === 'fall') {
  console.log("It's fall! Leaves are falling!");
} else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log('Invalid season.');
}

/////////////////

// Switch Statement

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//////////////

// Functions

function getReminder() {
  console.log('Water the plants');
}

function greetInSpanish() {
  console.log('Buenas Tardes');
}

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();

// Parameters and Arguments

function sayThanks(name) {
  console.log(
    'Thank you for your purchase ' + name + '! We appreciate your business.'
  );
}

sayThanks('Cole');

// Default Parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Return

function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function Expressions

const doPlantNeedsWater = function (day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(doplantNeedsWater('Tuesday'));

// Arrow Functions

const arrowPlantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Concise Body Arrow Functions

const plantNeedsWater = (day) => (day === 'Wednesday' ? true : false);
