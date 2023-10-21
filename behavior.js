

function getComputerChoice(){
    let choice = '';
    const choices = ['Rock', 'Scissors', 'Paper'];
    choice = choices[Math.floor(Math.random() * choices.length)];   
    //console.log(choice);
    return choice;
    

}

function randomGame(){
    let playerOne = getComputerChoice().toLowerCase();
    let playerTwo = getComputerChoice().toLowerCase();

  try{
     if(playerOne === playerTwo){
       console.log('Its a tie!');
    } else if(playerOne === 'rock' && playerTwo === 'scissors'){
        console.log('Player 2 loses, Rock beats Scissors!');
    }else if(playerOne === 'scissors' && playerTwo === 'paper'){
        console.log('Player 2 loses, Scissors beats Paper!'); 
    }else if(playerOne === 'paper' && playerTwo === 'rock'){
        console.log('Player 2 loses, Paper beats Rock!'); 
    }else 
       console.log('Player 2 wins, ' + playerTwo + " beats " + playerOne);
}catch(e){
    console.log("Error of type " + e);
}
}

