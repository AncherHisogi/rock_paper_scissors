let pcHand;
let huHand;
let huButton;
let huRes = 0;
let pcRes = 0;
let score_p = document.getElementById("score")
let userScore_span = document.getElementById("user-score")
let pcScore_span = document.getElementById("pc-score")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sci_div = document.getElementById("s");

rock_div.addEventListener('click', function()
{
    huButton = "rock";
    game();
})

paper_div.addEventListener('click', function()
{
    huButton = "paper";
    game();
})

sci_div.addEventListener('click', function()
{
    huButton = "scissors";
    game();
})

function rng()
{
   return Math.floor(Math.random() *3);
}

function computerPlay(str)
{
    
    switch(rng())
    {
        case 0:
            pcHand = "r";
            break;
        case 1:
            pcHand = "p";
            break;
        case 2:
            pcHand = "s";
            break;
    }
    return pcHand;

}

function humanPlay(str)
{
    
    switch(huButton)
    {
        case "rock":
            huHand = "r";
            break;
        case "paper":
            huHand = "p";
            break;
        case "scissors":
            huHand = "s";
            break;        
    }
    return huHand;

}

function winHu()
{
    huRes++;
    score_p.innerHTML = "YOU WIN";
    return huRes;
}

function loseHu()
{
    pcRes++;
    score_p.innerHTML = "YOU LOSE";
    return pcRes;
}
function draw()
{
    score_p.innerHTML = "ITS A DRAW";
}

function game()
{

    switch(humanPlay()+computerPlay())
    {
        case "rs":
        case "pr":
        case "sp":
            winHu();
            break;
        case "rp":
        case "ps":
        case "sr":
            loseHu();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
    score();
}

function score()
{
    userScore_span.innerHTML = huRes;
    pcScore_span.innerHTML = pcRes;
}
