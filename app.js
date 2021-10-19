const choices = ["rock" , "paper" , "scissors"];
const randomNum = Math.floor(Math.random() * 3);
const pcChoice = choices[randomNum];
const userChoice = prompt("Choose paper , rock or scissors");
start();
function start() 
{
    if (userChoice == "paper" || userChoice == "rock" || userChoice == "scissors")
    {
        console.log(`Your choice is ${userChoice}`);
        console.log(`Pc's choice is ${pcChoice}`);
        if (userChoice == pcChoice)
        {
            alert(`Tie situation !`);
            TieplayAgain();
        }
        else if (userChoice == "rock" && pcChoice == "paper")
        {
            console.log(` ${pcChoice} hits the ${userChoice}\n You lose the Game :(`);   
            playAgain();  
        }
        else if (userChoice == "rock" && pcChoice == "scissors")
        {
            console.log(`${userChoice} hits the ${pcChoice}\n You win the Game !!`);   
            playAgain();  
        }
        else if (userChoice == "paper" && pcChoice == "rock")
        {
            console.log(` ${userChoice} hits the ${pcChoice}\n You win the Game !!`);   
            playAgain();  
        }
        else if (userChoice == "paper" && pcChoice == "scissors")
        {
            console.log(` ${pcChoice} hits the ${userChoice} \n You lose the Game :(`);   
            playAgain();  
        }
        else if (userChoice == "scissors" && pcChoice == "rock")
        {        
            console.log(` ${pcChoice} hits the ${userChoice}\n You lose the Game :(`);   
            playAgain();  
            
        }
        else if (userChoice == "scissors" && pcChoice == "paper")
        {
            console.log(` ${userChoice} hits the ${pcChoice}\n You win the Game !!`);
            playAgain();  
        }
    }
    else {
        console.log(`You're cheating!!`);
        console.log(`no winner :(`);   
        playAgain();  
    }
}

function TieplayAgain() {
    const PA = confirm(`Wanna play again?`);
    if (PA) 
    {
        location.reload();
    }
    else
    {
        console.log(`Tie situation ! And you finished the Game`);
    }
}
function playAgain() {
    const PA = confirm(`Wanna play again?`);
        if (PA) 
        {
            location.reload();
        }
        else
        {
            console.log(`You finished the Game`);
        }  
    }
