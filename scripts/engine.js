function getComputerChoice (){
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random()* options.length);
    return options[random];
}

function playMatch(playerSelection, computerSelection ){
    if (playerSelection != null) {
        playerSelection = playerSelection.toString().toLowerCase();
        computerSelection = computerSelection.toString().toLowerCase();

        if(playerSelection === computerSelection)
            return "TIE";
        else if (
            playerSelection === 'rock' & computerSelection === 'scissor' ||
            playerSelection === 'paper' & computerSelection === 'rock' ||
            playerSelection === 'scissor' & computerSelection === 'paper'
        ){
            return "WIN"
        }
        else if (
            playerSelection === 'paper' & computerSelection === 'scissor' ||
            playerSelection === 'scissor' & computerSelection === 'rock' ||
            playerSelection === 'rock' & computerSelection === 'paper'
        ){
            return "LOST"
        }
        else
            return 'Invalid input'
    }
}

function playGame(){
    let scorePlayer = 0;
    let scorePC = 0;
    let match = 1;
    let resultMatch;

    while (match <= 5){
        let playerSelection = prompt("Rock Paper or Scissor?");
        //checkInput
        let computerSelection = getComputerChoice();
        resultMatch = playMatch(playerSelection, computerSelection);
        console.log("Round "+ match);
        console.log("User: "+ playerSelection);
        console.log("PC: "+ computerSelection);

        if (resultMatch === 'WIN'){
            scorePlayer++;
            console.log('You won this round!');
            //best of 3
            if(scorePlayer === 3 && scorePC < 3)
                match = 6;
        }
        else if (resultMatch === 'LOST'){
            scorePC++;
            console.log('You lost this round!');
            if(scorePC === 3 && scorePlayer < 3)
                match = 6;
        }
        match++;
    }
    console.log("Results!");
    console.log("User | PC ");
    console.log(scorePlayer + " | " + scorePC);

    if (scorePlayer > scorePC)
        console.log("You won the game!");
    else
        console.log("You lost the game!");
}

//playGame();
