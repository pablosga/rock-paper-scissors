function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPosition = Math.floor(Math.random() * 3);
    return options[randomPosition];
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    return playerChoice.toLowerCase();
}





