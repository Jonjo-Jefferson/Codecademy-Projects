let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate Random Number between 0 - 9

const generateTarget = () => {
  randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

// Test random number generate
console.log(generateTarget());

// Calculate difference between guess and secret number

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const humanDifference = secretNumber - humanGuess;
  const computerDifference = secretNumber - computerGuess;
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

// Test
console.log(compareGuesses(2, 2, 10));

// Increase winners score

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

// Advance Round

const advanceRound = (currentRoundNumber) => {
  currentRoundNumber++;
};
