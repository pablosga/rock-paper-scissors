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
let playAgain = document.querySelector("#play-again");
let ganador = document.querySelector("#ganador"); 

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
        if (playerCounter === 5) {
            ganador.textContent = `Felicidades! ganaste ${playerCounter} a ${computerCounter}`;
            playAgain.removeAttribute("hidden");
        } else if (computerCounter === 5) {
            ganador.textContent = `Oh no! perdiste ${computerCounter} a ${playerCounter}`;
            playAgain.removeAttribute("hidden");
        }
    }
}
        

botones.forEach((boton) => {
    boton.addEventListener("click", () => playGame(boton.id));
})

playAgain.addEventListener("click", function() {
    playerCounter = computerCounter = 0;
    playerScore.textContent = computerScore.textContent = "0";
    playAgain.setAttribute("hidden", true);
    ganador.textContent = null;
    resultadoMostrado.textContent = null; 
});

