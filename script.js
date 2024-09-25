let div = document.createElement("div")
document.body.appendChild(div);



let humanScore = 0;
let computerScore = 0

let btns = document.querySelectorAll("button")
btns.forEach((btn)=> btn.addEventListener("click",()=>{
    let entry = btn.id;
    const getHumanChoice = () => {
    return entry;
}
    let humanSelection = getHumanChoice();
    const getComputerChoice = () => {
    let value=Math.random();
    if(value < 1/3){return "rock"}
    else if(value<2/3){return "paper"}
    else{return "scissors"};
}
    let computerSelection = getComputerChoice()
 ;
    const playRound=(humanChoice, computerChoice)=>{
    if (humanChoice === computerChoice){
        console.log (`It is a draw. You both chose ${humanChoice}`);
        div.textContent = `Your score: ${humanScore}\n Computer Score:${computerScore}`
    }else if((humanChoice === "rock" && computerChoice === "paper") ||  
            (humanChoice === "paper" && computerChoice === "scissors" )|| 
            (humanChoice === "scissors" && computerChoice === "rock")  ){

                console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                div.textContent = `Your score: ${humanScore} \n Computer Score:${computerScore}`
                if(computerScore>=5){
                    div.textContent = `Loser`
                }

    }else if((humanChoice === "rock" && computerChoice === "scissors") ||  
            (humanChoice === "scissors" && computerChoice === "paper" )|| 
            (humanChoice === "paper" && computerChoice === "rock")  ){

                console.log(`You win. ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                div.textContent = `Your score: ${humanScore}\n Computer Score:${computerScore}`
}
if(humanScore>=5){
    div.textContent = `Winner`
}
}
playRound(humanSelection,computerSelection)

}))









//    

