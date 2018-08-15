let pcHand;
let huHand;
let huButton;
let huRes = 0;
let pcRes = 0;
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
    return huRes;
}

function loseHu()
{
    pcRes++;
    return pcRes;
}
function draw()
{
    console.log("DRAW")
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
    console.log("Player::" +huRes +huHand);
    console.log("PC ::" +pcRes);
}
