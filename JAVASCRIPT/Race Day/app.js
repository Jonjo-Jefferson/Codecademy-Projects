let raceNumber = Math.floor(Math.random() * 1000);
const registedEarly = true;
const age = 18;

if (age > 18 && registedEarly) {
  raceNumber += 1000;
}

if (age > 18 && registedEarly) {
  console.log(`You will race at 0930 and your racenumber is ${raceNumber}`);
} else if (age > 18 && !registedEarly) {
  console.log(`You will race at 1100 and your racenumber is ${raceNumber}`);
} else if (age < 18) {
  console.log(`You will race at 1230 and your racenumber is ${raceNumber}`);
} else {
  console.log(`As you are exactly ${18}, please see the registration clerk`);
}
