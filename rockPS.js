const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "goku"){
    return userInput;
  }
  else {
    console.log("Error");
  }
};


const getComputerChoice = () =>{
  const randomNumber= Math.floor(Math.random() * 3);
  switch (randomNumber){
      case 0:
      	return "rock";
      case 1:
      	return "paper";
      case 2:
      return "scissors";

  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "Issa tie";
  };
  if (userChoice === "rock") {
    if (computerChoice === "paper"){
      return "Computer won";
    } else {
      return "You won";
    }
  };
  if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      return "Computer won";
    } else {
      return "You won";
    }
  };
  if (userChoice === "paper"){
    if (computerChoice === "scissors"){
      return "Computer won";
    } else {
      return "You won";
    }
  }
  if (userChoice === "Goku"){
    return "YOU WON";
  } else {
    return "YOU WON"
  }
};

// console.log("Determine winner works? " + determineWinner("paper", "paper"))

const playGame = () => {
  const userChoice = getUserChoice("goku");
  console.log("You chose " + userChoice);
  const computerChoice = getComputerChoice();
  console.log("Computer chose " +computerChoice);

  console.log("Result: " + determineWinner(userChoice, computerChoice));
};

playGame();
