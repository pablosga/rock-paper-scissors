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

function playGame() {
    let playerWinsCounter = 0;
    let computerWinsCounter = 0;
    for (let round = 1; round <= 5; round++) {
        let result = playRound(getComputerChoice(), getPlayerChoice());
        console.log(result)
        if (result[0] === "G") {
            playerWinsCounter++
        } else if (result[0] === "P") {
            computerWinsCounter++
        }
    }
    if (playerWinsCounter > computerWinsCounter) {
        console.log(`Ganaste! ${playerWinsCounter} a ${computerWinsCounter}`)
    } else if (playerWinsCounter < computerWinsCounter) {
        console.log(`Perdiste! ${computerWinsCounter} a ${playerWinsCounter}`)
    } else {console.log(`Empate! ${computerWinsCounter} a ${playerWinsCounter}`)}
} 

playGame()

