const computerChoice = ["rock", "paper", "scissors"];
const rock = "rock";
const scissors = "scissors";
const paper = "paper";

//Return computer's choice
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomNumber];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection ===  computerSelection){
        return "draw";
    }else if(playerSelection ===  rock  && computerSelection === scissors){
        return "Player won";
    }else if(playerSelection ===  scissors  && computerSelection === paper){
        return "Player won";}
    else if(playerSelection ===  paper  && computerSelection === rock){
        return "Player won";
    }else{
        return "Computer won";
    }   
}

function game(){
    let playLog = [];
    let round = 0;
    let promptMsg  = "Choose one: rock, paper, or scissors"
    for (let i = 1; i < 6; i++) {
        const computerSelection = computerPlay().toLowerCase();
        let playerSelection = prompt("ROUND "+ i + "\n\n" + promptMsg).toLowerCase();

        if (playerSelection === rock || playerSelection === paper || playerSelection === scissors) {
            console.log("Round - " + i + " - ")
            console.log("You played : " +  playerSelection);
            console.log("The computer played: " + computerSelection + "\n\n");
            playLog.push(playRound( playerSelection, computerSelection));  
        }else{
            i--;
            promptMsg = promptMsg  = "Choose one: rock, paper, or scissors \n\n Please check your choice!";
        }    
    }

    //Log the result in an array
    for (let i = 0; i < playLog.length; i++) {
            round++;
            console.log("Round: " + round + " ===> " + playLog[i] + "\n");
        }  
}


game();

