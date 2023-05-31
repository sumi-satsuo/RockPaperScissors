let scorePlayer = 0, scorePC = 0;
let match = 1;

const resScore = document.querySelector('.resScore');
resScore.textContent = "CPU 0 | 0 Player";

const resMatch = document.querySelector('.resMatch');
resMatch.textContent = "";

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

function saveScore(res) {
    if (res === 'WIN'){
        scorePlayer++;
        resMatch.textContent = 'You won this round!';
        //best of 3
        if(scorePlayer === 3 && scorePC < 3)
            match = 6;
    }
    else if (res === 'LOST'){
        scorePC++;
        resMatch.textContent = 'You lost this round!';
        if(scorePC === 3 && scorePlayer < 3)
            match = 6;
    }
    else if (res === 'TIE'){
        resMatch.textContent = 'Its a Tie!';
    }
    updateResults();
    match++;
}

function resetGame() {
    match = 0;
    resScore.textContent = "CPU 0 | 0 Player";
    scorePlayer = 0
    scorePC = 0;
    resMatch.textContent = "";

}

function updateResults(){
    resScore.textContent = `CPU ${scorePC} | ${scorePlayer} Player`;
    if (match > 5 ) {
        if (scorePlayer > scorePC)
            M.toast({html: "You won the game!"});
        else
            M.toast({html: "You lost the game!"});

        resetGame();
    }
}

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', e => {
    let res = playMatch('rock', getComputerChoice());
    saveScore(res);
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', e => {
    let res = playMatch('paper', getComputerChoice());
    saveScore(res);
});

const btnScissor = document.querySelector('.btnScissors');
btnScissor.addEventListener('click', e => {
    let res = playMatch('scissor', getComputerChoice());
    saveScore(res);
});