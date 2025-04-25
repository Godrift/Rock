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

function getHumanChoice(choice){
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


function playGame(selection){
    const humanSelection = getHumanChoice(selection);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    score = 
    `Your score is ${humanScore}, Computer score is ${computerScore}!`;
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            score = `You win!`;
        } else {
            score = `You lose!`;
        }
    };

    
    console.log(score);
    const results = document.querySelector(".results");
    results.textContent = score;
    
}


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");


const rockClick = function() {
    playGame("rock");
};

const paperClick = function() {
    playGame("paper");
};

const scissorsClick = function() {
    playGame("scissors");
}

rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissors.addEventListener("click", scissorsClick);


