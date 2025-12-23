
const stringRock = "rock";
const stringPaper = "paper";
const stringScissors = "scissors";

function getComputerChoice() {

    const randomVal = Math.floor(Math.random() * 3);

    switch(randomVal) {
        case 0:
            return stringRock;
        case 1:
            return stringPaper;
        case 2: 
            return stringScissors;
        default: 
            return "";
    }
}

function getHumanChoice() {

    let userInput = prompt("Rock, Paper, or Scissors?: ").toLowerCase();

    switch(userInput) {
        case "rock":
            return stringRock;
        case "scissors":
            return stringScissors;
        case "paper":
            return stringPaper;
        default:
            return "";
    }
}

function playRound(humanChoice, computerChoice) {

    if (!humanChoice) {
        console.log("Invalid choice");
        return;
    }

    let result = "";

    if(humanChoice === computerChoice) {
        result = "It's a tie!";
    }else{
        switch(humanChoice) {
            case stringRock:
                if(computerChoice === stringScissors) {
                    result = "You win!";
                }else {
                    result = "You lose!";
                }
                break;
            case stringPaper:
                if(computerChoice === stringRock) {
                    result = "You win!";
                }else {
                    result = "You lose!";
                }
                break;
            case stringScissors:
                if(computerChoice === stringPaper) {
                    result = "You win!";
                }else {
                    result = "You lose!";
                }
                break;
        }
    }

    
    console.log(result);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(`Human Choice: ${humanChoice}`);
    return result;
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);

        if(roundResult === "You win!") {
            humanScore++;
        }else if(roundResult === "You lose!") {
            computerScore++;
        }
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    
}

playGame();





