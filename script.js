function playRound(humanChoice, computerChoice){
    
}

let value = Math.random();
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice(){
    let computerChoice;

    if(value >= 0 && value <= 0.3){
            computerChoice = "Scissors"
        }
        
    else if(value > 0.3 && value <= 0.6){
            computerChoice = "Paper";
        }
        
    else{
            computerChoice = "Rock";
        }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter a choice: Rock, Paper or Scissors").toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    if(!validChoices.includes(humanChoice)){
        alert("Please enter a valid choice!");
        return getHumanChoice();
    }

    return humanChoice;
}

let humanScore = 0, computerScore = 0;
// playRound(humanSelection, computerSelection);
