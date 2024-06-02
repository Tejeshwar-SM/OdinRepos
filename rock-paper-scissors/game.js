console.log("hello world")
let ccFlag;
// getComputerChoice(0,2): to get nums 0, 1 or 2
function getComputerChoice(a, b) {
/*
    // const randomNum = Math.floor(Math.random()*100);
    // console.log(randomNum)
    
    // if(randomNum <=33) {
    //     console.log("rock")
    // }
    // if(randomNum <= 66 && randomNum > 33) {
    //     console.log("paper")
    // }
    // if(randomNum >= 66) {
    //     console.log("scissor")
    // }
    // if(randomNum==100) {
    //     console.log("yoooooo whhhhaaatt thats a 1% chance!")
     // }
*/
                   
    const randomNum = Math.floor(Math.random()*(b-a+1)+a);

    if(randomNum ==0) {
        console.log("System picked: ROCK")
        ccFlag=0;
    }
    if(randomNum==1) {
        console.log("System picked: PAPER")
        ccFlag=1;
    }
    if(randomNum==2) {
        console.log("System picked: SCISSORS")
        ccFlag=2
    }
    // return ccFlag;   
}
// getComputerChoice(0,2): to get nums 0, 1 or 2


let hhFlag;

function getHumanChoice() {
    let choice = prompt("Choose one: ROCK | PAPER | SCISSORS");
    choice = choice.toUpperCase();

    console.log(`You picked: ${choice}`)
    if(choice == "ROCK") {
        // console.log("You picked ROCK")
        hhFlag = 0;
    }
    if(choice == "PAPER") {
        // console.log("You picked PAPER")
        hhFlag = 1;
    }   
    if(choice == "SCISSORS") {
        // console.log("You picked SCISSORS")
        hhFlag = 2;
    }
    
    //return hhFlag;
}
// getHumanChoice()


// let humanSelection = getHumanChoice(); this works on the return
//of the getHumanChoice() function
// let computerSelection = getComputerChoice(0,2);
//-----I want to use variables to store the state, and then recall the
//functions


let roundFlag;
function playRound(HumanChoice, ComputerChoice) {
    //if same vals of flags: then score stays the same,
    //then function calls itself back
    if(ccFlag==hhFlag) {
        console.log("Both Picked the same thing, try again")
        // playRound(HumanChoice, ComputerChoice)
        playRound(getHumanChoice(), getComputerChoice(0,2))
    }
    if((ccFlag ==0 && hhFlag == 1) || (ccFlag==1 && hhFlag==2) || (ccFlag==2 && hhFlag==0) ) {
        //player wins
        roundFlag=1;
    }
    if((ccFlag ==0 && hhFlag == 2) || (ccFlag ==1 && hhFlag == 0) || (ccFlag ==2 && hhFlag == 1)) {
        //computer wins
        roundFlag=0;
    }
    // console.log("playround is working")
}


// playRound(humanSelection, computerSelection);

//playGame executes, starting the rounds

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++) {
        // playRound(humanSelection, computerSelection);
        playRound(getHumanChoice(), getComputerChoice(0,2));

        if(roundFlag==1) {
            humanScore++;
            console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        } else {
            computerScore++;
            console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        }
        // console.log("play game is working")

    }

    console.log("humanScore: "+ humanScore + "computer Score: " + computerScore);
    if(humanScore>computerScore) {
        console.log("You Win!!! Play Again")
    } else if(computerScore > humanScore) {
        console.log("You Lost!!! Try Again")
    } else {
        console.log("Its a Tie!!!")
    }
}
playGame();