const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 9;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 5;
    case 'friday':
      return 8;
    case 'saturday':
      return 5;
    case 'sunday':
      return 7;
  }
};
// !Test switch statement
// console.log(getSleepHours('saturday'));

const getActualSleepHours = () => {
  return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
  );
};

// !Calculate hours slept for week
// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return 'Perfect!';
  } else if (actualSleepHours > idealSleepHours) {
    return 'You slept ' + (actualSleepHours - idealSleepHours) + ' hour(s) more than you needed.';
  } else {
    return 'You slept ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you need. Get some rest';
  }
};

console.log(calculateSleepDebt());
