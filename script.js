function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPosition = Math.floor(Math.random() * 3);
    return options[randomPosition];
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    return playerChoice.toLowerCase();
}

function playRound(getComputerChoice, getPlayerChoice) {
    switch (getPlayerChoice) {
        case "rock":
            if (getComputerChoice === "rock") {
                return "Empate! Ambos elijieron piedra"
            } else if (getComputerChoice === "paper") {
                return "Perdiste! Papel vence a Piedra"
            } else {
                return "Ganaste! Piedra vence a Tijeras"
            }
            break;

        case "paper":
            if (getComputerChoice === "rock") { 
                return "Ganaste! Papel vence a Piedra"
            } else if (getComputerChoice === "paper") {
                return "Empate! ambos elijieron papel"
            } else {
                return "Perdiste! Tijeras vence a Papel"
            }
            break;

        case "scissors":
            if (getComputerChoice === "rock") {
                return "Perdiste! Piedra vence a Tijeras"
            } else if (getComputerChoice === "paper") {
                return "Ganaste! Tijeras vence a Papel"
            } else {
                return "Empate! ambos elijieron Tijeras"
            }
            break;
    }
}




