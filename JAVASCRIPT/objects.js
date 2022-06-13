// Accessing Properties
let spaceshipAcces = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn'],
};

const crewCount = spaceshipAcces.numCrew;
const planetArray = spaceshipAcces.flightPath;
console.log(planetArray);

// Bracket Notation

let spaceshipBracket = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5,
};

let propName = 'Active Mission';

const isActive = spaceshipBracket['Active Mission'];
console.log(spaceshipBracket[propName]);

// Property Assignment
let spaceshipProperty = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.',
};

spaceshipProperty.color = 'glorious gold';
spaceshipProperty.numEngines = 7;
delete spaceshipProperty['Secret Mission'];

// Methods

let retreatMessage =
  'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
};

alienShip.retreat();
alienShip.takeOff();

// Nested Objects

let spaceshipObjects = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() {
        console.log('We got this!');
      },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
    },
  },
  engine: {
    model: 'Nimbus2000',
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD',
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50,
    },
  },
};

const capFave = spaceshipObjects.crew.captain['favorite foods'][0];

spaceshipObjects.passengers = [spaceshipObjects.crew];

const firstPassenger = spaceshipObjects.passengers[0];
console.log(firstPassenger);

// Pass by Reference
let spaceshipPass = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

let greenEnergy = (obj) => {
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceshipPass);
remotelyDisable(spaceshipPass);
console.log(spaceshipPass);

// Looping through Objects

let spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      },
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      },
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      },
    },
  },
};

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewDegree in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`
  );
}
