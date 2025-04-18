function getComputerChoice(){
    let value = Math.floor(Math.random() * 3);
    switch (value){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function getHumanChoice(){
    let choice = prompt();
    return choice;
}



function playRound(humanChoice, computerChoice){
    humanChoice=humanChoice.toLowerCase();
    console.log(humanChoice, computerChoice)


    if (humanChoice == computerChoice){
        console.log(`Tie! Both are ${humanChoice}`)
    }else if (computerChoice == "rock"){
        switch (humanChoice){
            case "scissors":
                console.log(`You lose! Rock beats Scissors!`);
                computerScore += 1;
                return 0;
            case "paper":
                console.log(`You win! Paper beats Rock!`);
                humanScore += 1;
                return 0;
        }
    }else if (computerChoice == "scissors"){
        switch (humanChoice){
            case "paper":
                console.log(`You lose! Scissors beats Paper!`);
                computerScore += 1;
                return 0;
            case "rock":
                console.log(`You win! Rock beats Scissors!`);
                humanScore += 1;
                return 0;
        }
    }else if (computerChoice == "paper"){
        switch (humanChoice){
            case "rock":
                console.log(`You lose! Paper beats Rock!`);
                computerScore += 1;
                return 0;
            case "scissors":
                console.log(`You win! Scissors beats Paper!`);
                humanScore += 1;
                return 0;
        }
    }
}
    
let humanScore = 0;
let computerScore = 0;


function playGame(){


    for (i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score is ${humanScore}, Computer score is ${computerScore}!`)
}

playGame();
