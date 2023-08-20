const getComputerChoice = function() {
    const random = Math.floor(Math.random()*(3-1+1)+1)
    switch (random) {
        case 1:
            console.log("rock");
            break;
        case 2:
            console.log("scissors");
            break
        case 3:
            console.log("paper");
            break
    
        default:
            break;
    }
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection) {
        console.log("");
    } else {
        
    }
}