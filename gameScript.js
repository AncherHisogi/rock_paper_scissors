let pcHand;
let huHand;
let huRes = 0;
let pcRes = 0;


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
    
    switch(huHand.toLowerCase())
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
}

function game()
{
    while (huRes < 5 && pcRes <5)
    {
        huHand = window.prompt();
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
}

function score()
{
    console.log("Player::" +huRes);
    console.log("PC ::" +pcRes);
}

game();