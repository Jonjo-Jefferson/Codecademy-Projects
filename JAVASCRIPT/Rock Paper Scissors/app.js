const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'cheat'
  ) {
    return userInput;
  } else {
    console.log('Incorrect choice.');
  }
};

// !Test user choice
// console.log(getUserChoice('Rock'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// !Test computer choice
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won';
    } else {
      return 'You Won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You Won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  // Cheat code
  if (userChoice === 'cheat') {
    return 'You cheated and won!';
  }
};

// !Test
// console.log(determineWinner('rock', 'rock'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
