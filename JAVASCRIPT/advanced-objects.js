// !THIS keyword

const robotThis = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};

// console.log(robotThis.provideInfo());

// !Arrow functions and THIS refactor to work

// const robot = {
//   energyLevel: 100,
//   checkEnergy: () => {
//     console.log(`Energy is currently at ${this.energyLevel}%.`);
//   },
// };

// robot.checkEnergy();

const robotArrow = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

// robotArrow.checkEnergy();

// !Privacy

const robotPrivacy = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robotPrivacy._energyLevel = 'high';

// robotPrivacy.recharge();

// !Getters
// Getters are methods that get and return the internal properties of an object.
// But they can do more than just retrieve the value of a property!

const robotGetters = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return `System malfunction: cannot retrieve energy level`;
    }
  },
};

// console.log(robotGetters.energyLevel);

// !Setters
const robotSetters = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};

robotSetters.numOfSensors = 100;
console.log(robotSetters.numOfSensors);

// !Factory Functions

const robotFactoryFunctions = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('beep boop');
    },
  };
};
const tinCan = robotFactoryFunctions('P-500', true);
// console.log(tinCan.model);
// tinCan.beep();

// !Property Value Shorthand
function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
}

const newRobotrobotFactory = robotFactory('P-501', false);
// console.log(newRobot.model);
// console.log(newRobot.mobile);

// !Destructured Assignment

const robotDestructured = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  },
};

const { functionality } = robotDestructured;
functionality.beep();

// !Built-in Object Methods

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
};

const robotKeys = Object.keys(robot);

console.log(robotKeys);

const robotEntries = Object.entries(robot);
console.log(robotEntries);

const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);
console.log(newRobot);
