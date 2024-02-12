function getComputerChoice() {
    let options = ["piedra", "papel", "tijeras"];
    let randomPosition = Math.floor(Math.random() * 3);
    return options[randomPosition];
}

function getPlayerChoice() {
    let playerChoice = prompt("Piedra, Papel or Tijeras?")
    return playerChoice.toLowerCase();
}

function playRound(getComputerChoice, getPlayerChoice) {
    switch (getPlayerChoice) {
        case "piedra":
            if (getComputerChoice === "piedra") {
                return "Empate! Ambos elijieron piedra"
            } else if (getComputerChoice === "papel") {
                return "Perdiste! Papel vence a Piedra"
            } else {
                return "Ganaste! Piedra vence a Tijeras"
            }
            break;

        case "papel":
            if (getComputerChoice === "piedra") { 
                return "Ganaste! Papel vence a Piedra"
            } else if (getComputerChoice === "papel") {
                return "Empate! ambos elijieron papel"
            } else {
                return "Perdiste! Tijeras vence a Papel"
            }
            break;

        case "tijeras":
            if (getComputerChoice === "piedra") {
                return "Perdiste! Piedra vence a Tijeras"
            } else if (getComputerChoice === "papel") {
                return "Ganaste! Tijeras vence a Papel"
            } else {
                return "Empate! ambos elijieron Tijeras"
            }
            break;
    }
}

