//global properties
const choices = ['Rock', 'Scissors', 'Paper'];
let playerOneScore = 0;
let playerTwoScore = 0;
let winner = '';
const MAXROUNDS = 5;



//the 'computer' chooses an option randomly
function getComputerChoice(){
    let choice = '';
    choice = choices[Math.floor(Math.random() * choices.length)];   
    //console.log(choice);
    return choice;
}

//By clicking a button, player chooses an option to play with 'computer'
function getUserChoice(){
    const btns = document.querySelectorAll("button");
    for(const btn of btns){
        if(btn === "testr"){
            return;
        };
    btn.addEventListener('click', ()=>{
     let choice = btn.getAttribute("class"); 
     console.log(choice + "");
     playRound(choice);
     //return choice;
    });
}

}

function  playRound(playerOne){
 // let  playerOne = getComputerChoice().toLowerCase();
  let playerTwo = getComputerChoice().toLowerCase();

  try{
    if(playerOneScore === 5 || playerTwoScore === 5){
         (playerOneScore > playerTwoScore)? winner = "One": winner = "Two";
        console.log(`Game Over! Player ${winner} wins!`);
        return;
    }
     if(playerOne === playerTwo){
       console.log('Its a tie!');
       playerOneScore++;
       playerTwoScore++;
    } else if(playerOne === 'rock' && playerTwo === 'scissors'){
        playerOneScore++;
        console.log('Player 2 loses, Rock beats Scissors!');
    }else if(playerOne === 'scissors' && playerTwo === 'paper'){
        playerOneScore++;
        console.log('Player 2 loses, Scissors beats Paper!'); 
    }else if(playerOne === 'paper' && playerTwo === 'rock'){
        playerOneScore++;
        console.log('Player 2 loses, Paper beats Rock!'); 
    }else 
       console.log('Player 2 wins, ' + playerTwo + " beats " + playerOne);
       playerTwoScore++;
}catch(e){
    console.log("Error of type " + e);
}
}


getUserChoice();

