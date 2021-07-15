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
            let x = RPS[randomNum]
            return x;
    }
//create function called playRound() that plays a single round of
//  Rock Paper Scissors -
function playRound(playerSelection, computerSelection)
    {
        var playerSelection = window.prompt();
        var computerSelection = computerPlay();
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
        console.log(ps);
        console.log(cs);
        if(ps == cs)
        {
           return("its a tie, play again"); 
        }
        if( ps == 'rock' && cs == 'paper')
        {
            return("you lose, paper beats rock")
        }
        if( ps == 'rock' && cs == 'scissors')
        {
            return("you win, rock beats scissors")
        }
        if( ps == 'paper' && cs == 'rock')
        {
            return("you win, paper beats rock")
        }
        if( ps == 'paper' && cs == 'scissors')
        {
            return("you lose, paper beats scissors")
        }
        if( ps == 'scissors' && cs == 'paper')
        {
            return("you win, scissors beats paper")
        }
        if( ps == 'scissor' && cs == 'rock')
        {
            return("you lose, scissors beats paper")
        }
    }
        //create function game that uses playRound function to play 5 rounds
        function game()
        {
            var l = 0;
            var w = 0;
            var result = playRound();
            console.log(result);
            if(result.charAt(4)=='l')
            {
                l++;
            }
            else
            {
                w++;
            }
            var result = playRound();
            console.log(result);
            if(result.charAt(4)=='l')
            {
                l++;
            }
            if(result.charAt(4)=='w')
            {
                w++;
            }
            var result = playRound();
            console.log(result);
            if(result.charAt(4)=='l')
            {
                l++;
            }
            if(result.charAt(4)=='w')
            {
                w++;
            }
            var result = playRound();
            console.log(result);
            if(result.charAt(4)=='l')
            {
                l++;
            }
            if(result.charAt(4)=='w')
            {
                w++;
            }           
            var result = playRound();
            console.log(result);
            if(result.charAt(4)=='l')
            {
                l++;
            }
            if(result.charAt(4)=='w')
            {
                w++;
            }
            if(w<l)
            {
                console.log("you lose");
            }
            if(l<w)
            {
                console.log("you win");
            }
            if(l == w)
            {
                console.log("its a tie")
            }
        }
        //the function will keep score
        //the function will report winner or loser at the end