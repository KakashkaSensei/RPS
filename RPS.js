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
            let x = RPS[randomNum]
            return x;
    }
//create function called playRound() that plays a single round of
//  Rock Paper Scissors -
function playRound(playerSelection, computerSelection)
    {
        var playerSelection = window.prompt('this is a game of rock paper scissors, please choose your weapon', 'rock/paper/scissors');
        var computerSelection = computerPlay();
//  change playerSelection to lowercase letters
        var ps = playerSelection.toLowerCase();
//  change computerSelection to lowercase
        var cs = computerSelection.toLowerCase();
        while(ps != 'paper' && ps != 'scissors' && ps != 'rock')
        {
            playerSelection = window.prompt('you are stupid please write your choise correctly');
            ps = playerSelection.toLowerCase();
        }
//  * create loop that checks who is the winner and return a string 
//  that declares who is the winner
//     * if(computerSelection = 'Rock' and
//      playerSelection = 'Scissoers') 
//      then print 'you lose! Rock beats Scissors'
//     * if(computerSelection = 'Rock' and
//      playerSelection = 'Paper') 
//      then print 'you win! Paper beats Rock'
//      and so on
        console.log("you choose "+ps);
        console.log("computer choose "+cs);
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
            return("you lose, scissors beats paper")
        }
        if( ps == 'scissors' && cs == 'paper')
        {
            return("you win, scissors beats paper")
        }
        if( ps == 'scissors' && cs == 'rock')
        {
            return("you lose, rock beats scissors")
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
            if(result.charAt(4)=='w')
            {
                w++;
            }
            document.getElementById('result').innerHTML = result + " " + "your score is: " + w + " computer score: " + l;
            console.log(l);
            console.log(w);
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
            document.getElementById('result').innerHTML = result + " " + "your score is: " + w + " computer score: " + l;
            console.log(l);
            console.log(w);
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
            document.getElementById('result').innerHTML = result + " " + "your score is: " + w + " computer score: " + l;
            console.log(l);
            console.log(w);
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
            document.getElementById('result').innerHTML = result + " " + "your score is: " + w + " computer score: " + l;
            console.log(l);
            console.log(w);          
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
            document.getElementById('result').innerHTML = result + " " + "your score is: " + w + " computer score: " + l;
            if(w<l)
            {
                console.log(l);
                console.log(w);          
                console.log(result);
                document.getElementById('result').innerHTML ="you lose the game, " + "your score is: " + w + " computer score: " + l;
                console.log("you lose");
            }
            else{
            if(l == w)
                {
                console.log("its a tie")
                console.log(l);
                console.log(w);          
                console.log(result);
                document.getElementById('result').innerHTML = "ITS A TIE PLAY AGAIN " + "your score is: " + w + " computer score: " + l;
               }
            else
                {
                    console.log("you win");
                    console.log(l);
                    console.log(w);          
                    console.log(result);
                    document.getElementById('result').innerHTML = "you win the game! " + "your score is: " + w + " computer score: " + l;
                }
            }
            
        }
        //the function will keep score
        //the function will report winner or loser at the end