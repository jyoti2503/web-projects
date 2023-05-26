const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput=== 'rock' || userInput==='scissors' || userInput==='paper' || userInput==='bomb'){
        return userInput;
    }
    else{
        console.log('Erroe, Please type: rock, paper or scissors');
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (UserChoice, ComputerChoice) =>{
    if(UserChoice==='bomb'){
        return 'You won! Bomb alwaye wins!';
    }
    if(UserChoice=== 'rock'){
        if(ComputerChoice==='paper'){
            return "Sorry, computer won!";
        }
        else {
            return "Congrats, you won!";
        }
}

if(UserChoice==='scissors'){
    if(ComputerChoice==='rock'){
        return "Sorry, computer won!";
    }
    else {
        return "Congrats, you won!";
    }
}

};


const playGame=() => {
    const UserChoice = getUserChoice('bomb');
    const ComputerChoice = getComputerChoice();
    console.log('You threw: ' + UserChoice);
    console.log('The computer threw: ' + ComputerChoice);

    console.log(determineWinner(UserChoice, ComputerChoice));

};

playGame();