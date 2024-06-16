//when user clicks any button, console log that btn
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const playerScore = document.querySelector('#ps');
const computerScore = document.querySelector('#cs');

let pScoreCount = 0;
let cScoreCount = 0;

rockBtn.addEventListener("click", () => {
    // console.log("rock");
    handleClick('rock');
});

paperBtn.addEventListener("click", () => {
    // console.log("paper");
    handleClick('paper');
});

scissorBtn.addEventListener("click", () => {
    // console.log("scissors")
    handleClick('scissors');
})

function handleClick(string) {
    string = string.toLowerCase().trim();
    console.log(`You picked: ${string}`)
    if(string === "rock") {
        // console.log("You picked ROCK")
        hhFlag = 0;
        // return 'rock';
    }
    if(string === "paper") {
        // console.log("You picked PAPER")
        hhFlag = 1;
        // return 'paper';
    }   
    if(string === "scissors") {
        // console.log("You picked SCISSORS")
        hhFlag = 2;
        // return 'scissors';
    }
    const compChoice = getComputerChoice();
    console.log(`System picked: ${compChoice}`);
    playRound(string, compChoice);
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3);

    if(randomNum ==0) {
        // console.log("System picked: rock")
        ccFlag=0;
        return 'rock';
    }
    if(randomNum==1) {
        // console.log("System picked: paper")
        ccFlag=1;
        return 'paper'
    }
    if(randomNum==2) {
        // console.log("System picked: scissors")
        ccFlag=2;
        return 'scissors'
    }
}

function playRound(HumanChoice, ComputerChoice) {
    if(ccFlag==hhFlag) {
        console.log("Both Picked the same thing, try again")
        
    }
    if((ccFlag ==0 && hhFlag == 1) || (ccFlag==1 && hhFlag==2) || (ccFlag==2 && hhFlag==0) ) {
        //player wins
        roundFlag=1;
        console.log('Player wins');
        pScoreCount++;
        playerScore.textContent = `${pScoreCount}`;
        computerScore.textContent = `${cScoreCount}`;
    }
    if((ccFlag ==0 && hhFlag == 2) || (ccFlag ==1 && hhFlag == 0) || (ccFlag ==2 && hhFlag == 1)) {
        //computer wins
        roundFlag=0;
        console.log('Computer wins');
        cScoreCount++;
        playerScore.textContent = `${pScoreCount}`;
        computerScore.textContent = `${cScoreCount}`;
    }
    // console.log("playround is working")

    if(pScoreCount>=5 || cScoreCount >= 5) {
        showResults(pScoreCount,cScoreCount);
        return;
    }
    
}


function showResults(score1, score2) {
    if(score1 > score2) {
        playerScore.textContent = `Player Won!!!`;
        restartGame();
    } else {
        computerScore.textContent = `Computer Won!!!`;
        restartGame(); 
    }
    
    
}
function restartGame() {
    setTimeout(()=>{alert("Wanna Restart?");},100);
    pScoreCount=0;
    cScoreCount=0;
}