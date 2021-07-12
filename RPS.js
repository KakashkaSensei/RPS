//create function named computerPlay
function computerPlay()
    {
            // create array that contains string 'Rock', 
            //'Paper', 'Scissors'
            let RPS = ['Rock', 'Paper', 'Scissors'];
            // create var randomNum = 0
            var randomNum = 0;
            // create function that randomply picks number between 0-2
                //use method Math.floor((Math.random()*3)+1)
            // randomNum = that function -1
            randomNum = Math.floor((Math.random()*3)+1)-1;
            // return string from array at possion randomNumber
            console.log(RPS[randomNum]);
    }
//create function called playRound() that plays a single round of
//  Rock Paper Scissors -
function playRound(playerSelection, computerSelection)
    {
//  change playerSelection to lowercase letters
        var ps = playerSelection.toLowerCase();
//  change computerSelection to lowercase
        var cs = computerSelection.toLowerCase();
//  * create loop that checks who is the winner and return a string 
//  that declares who is the winner
//     * if(computerSelection = 'Rock' and
//      playerSelection = 'Scissoers') 
//      then print 'you lose! Rock beats Scissors'
//     * if(computerSelection = 'Rock' and
//      playerSelection = 'Paper') 
//      then print 'you win! Paper beats Rock'
//      and so on
        if(ps == cs)
        {
           return "its a tie, play again"; 
        }
        if()
        {

        }
    }