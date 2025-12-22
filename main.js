let humanScore = 0;
let computerScore = 0;
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
                    humanScore++;
                }else {
                    result = "You lose!";
                    computerScore++;
                }
                break;
            case stringPaper:
                if(computerChoice === stringRock) {
                    result = "You win!";
                    humanScore++;
                }else {
                    result = "You lose!";
                    computerScore++;
                }
                break;
            case stringScissors:
                if(computerChoice === stringPaper) {
                    result = "You win!";
                    humanScore++;
                }else {
                    result = "You lose!";
                    computerScore++;
                }
                break;
        }
    }

    console.log(result);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);