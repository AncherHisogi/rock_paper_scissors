let pcHand;
let huHand;

function rng()
{
   return Math.floor(Math.random() *3);
}

function computerPlay(str)
{
    
    switch(rng())
    {
        case 0:
            pcHand = "Rock";
            break;
        case 1:
            pcHand = "Paper";
            break;
        case 2:
            pcHand = "Scissors";
            break;
    }
    return pcHand;
}

hu = console.
