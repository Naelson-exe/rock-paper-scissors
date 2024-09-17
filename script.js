let humanScore = 0, computerScore = 0;
let round = 1;

function playRound(humanChoice, computerChoice) {
    const div = document.querySelector('div:last-of-type');
    const paraRound = document.createElement('p');
    const paraResult = document.createElement('p');
    const paraScore = document.createElement('p');

    // Display the round number
    paraRound.textContent = `Round ${round}:`;
    div.appendChild(paraRound);

    // Determine the result of the round
    if (humanChoice === computerChoice) {
        paraResult.textContent = "It's a tie!";
    } 
    else if ((humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        paraResult.textContent = "Hurray, you won this round!";
    } 
    else {
        computerScore++;
        paraResult.textContent = "Sorry, the computer wins this round.";
    }

    // Display the result of the round and update scores
    paraScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    div.appendChild(paraResult);
    div.appendChild(paraScore);

    // Increment the round counter after each round
    round++;
}

function getComputerChoice() {
    let value = Math.random();
    if (value >= 0 && value <= 0.3) {
        return "scissors";
    } else if (value > 0.3 && value <= 0.6) {
        return "paper";
    } else {
        return "rock";
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

// Event listeners for human choice
document.querySelector(".rock").addEventListener('click', () => {
    playGame('rock');
});

document.querySelector(".paper").addEventListener('click', () => {
    playGame('paper');
});

document.querySelector(".scissors").addEventListener('click', () => {
    playGame('scissors');
});
