let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It's a tie");
        computerScore++;
        humanScore++;
    }

    else if((humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice == "paper" && computerChoice === "rock")
            || (humanChoice == "scissors" && computerChoice === "rock")){
                humanScore++;
                console.log("Hurray, you won this round.");

    }

    else{
        computerScore++;
        console.log("Sorry, the computer wins this round.")
    }
}

function getComputerChoice(){
    let computerChoice;
    let value = Math.random();

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
    let humanChoice;
    humanChoice = prompt("Enter a choice: Rock, Paper or Scissors").toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    if(!validChoices.includes(humanChoice)){
        alert("Please enter a valid choice!");
        return getHumanChoice();
    }

    return humanChoice;
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}`);
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final score: Human: ${humanScore}, Computer: ${computerScore}`);

    if(humanScore > computerScore){
        console.log("Congratulations, you won the game.");
    }

    else if(computerScore > humanScore){
        console.log("Sorry, you lost.");
    }

    else{
        console.log("The game is a tie.");
    }
}

playGame();
