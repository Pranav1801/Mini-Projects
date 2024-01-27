// document.getElementById("computer-score").innerHTML = 0
// document.getElementById("user-score").innerHTML = 0

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const user = document.getElementById("user-score");
const computer = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");

let userScore = 0;
let computerScore = 0;

computer.innerHTML = computerScore;
user.innerHTML = userScore;
resultText.innerHTML = "Let the Party Begin!";

const fetchUserChoice = () => {
    rock.addEventListener("click", (e) => compare('rock'));
    paper.addEventListener("click", (e) => compare('paper'));
    scissors.addEventListener("click", (e) => compare('scissors'));
}

const fetchComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

const compare = (user) => {

    const computer = fetchComputerChoice();

    switch(user+computer){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("Win");
            win();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("Tie");
            lose();
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorsrock":
            console.log("Lose");
            break;
    }
}

const win = () =>{
    userScore++;
    user.innerHTML = userScore;
    resultText.innerHTML = "You Win";
}

const lose = () =>{
    computerScore++;
    computer.innerHTML = computerScore;
    resultText.innerHTML = "You Lose";
}



fetchUserChoice();