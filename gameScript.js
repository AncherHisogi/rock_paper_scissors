let pcHand;
let huHand;
let gameRes;
huHand = window.prompt();

function rng()
{
   return Math.floor(Math.random() *3);
}

function computerPlay(str)
{
    
    switch(rng())
    {
        case 0:
            pcHand = "rock";
            break;
        case 1:
            pcHand = "paper";
            break;
        case 2:
            pcHand = "scissors";
            break;
    }
    return pcHand;

}

function humanPlay(str)
{
    
    switch(huHand.toLowerCase())
    {
        case "rock":
            huHand = "rock";
            break;
        case "paper":
            huHand = "paper";
            break;
        case "scissors":
            huHand = "scissors";
            break;        
    }
    return huHand;

}

function game(str)
{

    switch(humanPlay()+computerPlay())
    {
        case "rockrock":
            gameRes = "TIE";
            break;

        case "rockpaper":
            gameRes = "PC WINS";
            break;

        case "rockscissors":
            gameRes = "HUMAN WINS";
            break;

        case "paperrock":
            gameRes = "HUMAN WINS";
            break;

        case "paperpaper":
            gameRes = "TIE";
            break;

        case "paperscissors":
            gameRes = "PC WINS";
            break;

        case "scissorsrock":
            gameRes = "PC WINS";
            break;

        case "scissorspaper":
            gameRes = "HUMAN WINS";
            break;
        
        case "scissorsscissors":
            gameRes = "TIE";
            break;
    }
    return gameRes
}

function gameRound()
{
    var round;
    for (round = 0;  )
}

console.log(game());
