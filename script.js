function getComputerChoice() {
    let options = ["piedra", "papel", "tijera"];
    let randomPosition = Math.floor(Math.random() * 3);
    return options[randomPosition];
}

function playRound(getComputerChoice, getPlayerChoice) {
    switch (getPlayerChoice) {
        case "piedra":
            if (getComputerChoice === "piedra") {
                return "Empate! Ambos elijieron piedra"
            } else if (getComputerChoice === "papel") {
                return "Perdiste! Papel vence a Piedra"
            } else {
                return "Ganaste! Piedra vence a Tijera"
            }
            break;

        case "papel":
            if (getComputerChoice === "piedra") { 
                return "Ganaste! Papel vence a Piedra"
            } else if (getComputerChoice === "papel") {
                return "Empate! ambos elijieron papel"
            } else {
                return "Perdiste! Tijera vence a Papel"
            }
            break;

        case "tijera":
            if (getComputerChoice === "piedra") {
                return "Perdiste! Piedra vence a Tijera"
            } else if (getComputerChoice === "papel") {
                return "Ganaste! Tijera vence a Papel"
            } else {
                return "Empate! ambos elijieron Tijera"
            }
            break;
    }
}

let resultadoMostrado = document.querySelector("span");
let botones = document.querySelectorAll("button");
botones = Array.from(botones);

let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
playerScore.textContent = "0";
computerScore.textContent = "0";
let playerCounter = 0;
let computerCounter = 0;

function playGame(botonPresionado) {
    if (playerCounter < 5 && computerCounter < 5) {
        resultadoObtenido = playRound(getComputerChoice(), botonPresionado);
        resultadoMostrado.textContent = resultadoObtenido;  
        if (resultadoObtenido[0] === "G") {
            playerCounter++;
            playerScore.textContent = playerCounter;
        } else if (resultadoObtenido[0] === "P") {
            computerCounter++;
            computerScore.textContent = computerCounter;
        }
    } else {}
        
}

botones.forEach((boton) => {
    boton.addEventListener("click", () => playGame(boton.id));
})