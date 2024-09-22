let humanScore = 0;
let computerScore = 0;

function playGame(){
   const getComputerChoice = () => {
    let value=Math.random();
    if(value < 1/3){return "rock"}
    else if(value<2/3){return "paper"}
    else{return "scissors"};
}

const getHumanChoice = () => {
    let entry = prompt("Please enter between rock, paper and scissors")
    let lowerHumanChoice = entry.toLowerCase();
    return lowerHumanChoice;

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

    const playRound=(humanChoice, computerChoice)=>{
    if (humanChoice === computerChoice){
        console.log (`It is a draw. You both chose ${humanChoice}`);
    }else if((humanChoice === "rock" && computerChoice === "paper") ||  
            (humanChoice === "paper" && computerChoice === "scissors" )|| 
            (humanChoice === "scissors" && computerChoice === "rock")  ){

                console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                computerScore++;

    }else if((humanChoice === "rock" && computerChoice === "scissors") ||  
            (humanChoice === "scissors" && computerChoice === "paper" )|| 
            (humanChoice === "paper" && computerChoice === "rock")  ){

                console.log(`You win. ${humanChoice} beats ${computerChoice}`)
                humanScore++;
}
    else{
        console.log(`Please choose between rock, paper and scissors`)
    }
}
    playRound(humanSelection,computerSelection)
    if(humanScore>computerScore)return `You won ${humanScore} to ${computerScore}`;
    else if(humanScore<computerScore)return `You lost ${humanScore} to ${computerScore}`;
    else{return 'You guys drew'}
}
playGame();
playGame();
playGame();
playGame();
let five = playGame();

console.log(five)
