const greetWorld = () => {
  return 'Hello, World!';
};

const canIVote = (voterAge) => {
  if (voterAge >= 18) {
    return true;
  } else {
    return false;
  }
};

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
};

const lifePhase = (age) => {
  if (age >= 0 && age <= 3) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
};

const finalGrade = (grade1, grade2, grade3) => {
  const averageGrade = (grade1 + grade2 + grade3) / 3;

  if (grade1 >= 0 && grade1 <= 100 && grade2 >= 0 && grade2 <= 100 && grade3 >= 0 && grade3 <= 100) {
    if (averageGrade >= 0 && averageGrade <= 59) {
      return 'F';
    } else if (averageGrade >= 60 && averageGrade <= 69) {
      return 'D';
    } else if (averageGrade >= 70 && averageGrade <= 79) {
      return 'C';
    } else if (averageGrade >= 80 && averageGrade <= 89) {
      return 'B';
    } else if (averageGrade >= 90 && averageGrade <= 100) {
      return 'A';
    }
  } else {
    return 'You have entered an invalid grade.';
  }
};

console.log(finalGrade(12, 43, 24));

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
};
console.log(reportingForDuty('Private', 'Fido'));

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  return die1 + die2;
};

console.log(rollTheDice());

const calculateWeight = (earthWeight, planet) => {
  if (planet === 'Mercury') {
    return `Your weight on ${planet} will be ` + earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return `Your weight on ${planet} will be ` + earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return `Your weight on ${planet} will be ` + earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return `Your weight on ${planet} will be ` + earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return `Your weight on ${planet} will be ` + earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
};

console.log(calculateWeight(100, 'Jupiter'));
