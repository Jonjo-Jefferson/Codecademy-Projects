// ! Hello World

const greetWorld = () => {
  return 'Hello, World!';
};

// ! Can I vote
const canIVote = (voterAge) => {
  if (voterAge >= 18) {
    return true;
  } else {
    return false;
  }
};
// ! Agree or Disagree
const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
};
// ! Life Phase
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
// ! Final Grade
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

// !Reporting for Duty
const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
};
console.log(reportingForDuty('Private', 'Fido'));

// ! Fix broken code

// const rollTheDice = () => {
// 	// Math.random() gives us a random number from 0 up to, but not including, 1
// 	// We multiplied that by 6 to get a number between 0 and up to, but not including, 6
// 	// But since we actually wanted numbers from 1 to 6, inclusive, we added 1
// 	  let die1 = Math.random() * 6 + 1
// 	  let die2 = Math.random() * 6 + 1
// 	  return die1 + die2
//   }

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  return die1 + die2;
};

console.log(rollTheDice());

// ! Calculate Weight
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

// ! Truthy or Falsy

const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
};
console.log(truthyOrFalsy(0));

// ! Num of imaginary friends

// ?v1
const numImaginaryFriends = (friends) => {
  calculateFriends = Math.ceil(friends / 4);
  return calculateFriends;
};

// ?v2
const numImaginaryShort = (friends) => Math.ceil(friends / 4);

// ! Silly Sentence

const sillySentence = (adj, verb, noun) => {
  return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};
console.log(sillySentence('excited', 'love', 'functions'));

// ! How Old

/* 
  Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
  */

const howOld = (age, year) => {
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();

  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};

// !Fix broken code 2

// const whatRelation = percentSharedDNA => {
//     if (percentSharedDNA === 100) {
//         return 'You are likely identical twins.'
//     }
//     if (percentSharedDNA > 34) {
//         return 'You are likely parent and child or full siblings.'
//     }
//     if (percentSharedDNA < 13) {
//         return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
//     }
//     if (percentSharedDNA > 5) {
//         return 'You are likely 1st cousins.'
//     }
//     if (percentSharedDNA > 2) {
//         return 'You are likely 2nd cousins.'
//     }
//     if (percentSharedDNA > 0) {
//         return 'You are likely 3rd cousins'
//     }
//     return 'You are likely not related.'
// }

// console.log(whatRelation(34))
// // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

// console.log(whatRelation(3))
// // Should print 'You are likely 2nd cousins.'
const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return 'You are likely identical twins.';
  }
  if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
    return 'You are likely parent and child or full siblings.';
  }
  if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
    return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
  }
  if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
    return 'You are likely 1st cousins.';
  }
  if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
    return 'You are likely 2nd cousins.';
  }
  if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
    return 'You are likely 3rd cousins';
  }
  return 'You are likely not related.';
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'

// ! Tip Calculator

const tipCalculator = (quality, mealTotal) => {
  if (quality === 'excellent') {
    return mealTotal * 0.3;
  } else if (quality === 'good') {
    return mealTotal * 0.2;
  } else if (quality === 'ok') {
    return mealTotal * 0.15;
  } else if (quality === 'bad') {
    return mealTotal * 0.05;
  } else {
    return mealTotal * 0.18;
  }
};

console.log(tipCalculator('excellent', 1100)); //should return 20
