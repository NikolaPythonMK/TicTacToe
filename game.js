import { Player, Bot } from "./player.js";
import { AI_MOVE } from "./ai_bot.js";

export const X_SYMBOL = '✕';
export const O_SYMBOL = '◯';

// export const USER_CLICK = new Audio('sounds/user.wav');
// export const BOT_CLICK = new Audio('sounds/bot.wav');
const USER_WIN = new Audio('sounds/winning.wav');
const BOT_WIN = new Audio('sounds/losing.wav');
const DRAW = new Audio('sounds/draw.wav');

const cells = document.getElementsByClassName("cell");
let playerScore = document.getElementById("player-score");
let botScore = document.getElementById("bot-score");
let tieScore = document.getElementById("tie-score");
let draw_counter = 0;
let player = new Player("✕");
let bot = new Bot("◯");

let waiting = false;

for(let i = 0; i < cells.length; i++)
{
    cells[i].addEventListener("click", function()
    {
        if(cells[i].textContent !== ""){
            return;
        }
        clearAnimations();
        playerMakesMove(cells[i]);
        if(waiting === false && !isDraw()){
            botMakesMove();
            isDraw();
        }
    })
}

function playerMakesMove(cell)
{
    
    cell.textContent = "✕";
    if(player.checkWin(cells))
    {
        player.animate(cells);
        player.wins++;
        playerScore.textContent = player.wins;
        waiting = true;
        USER_WIN.play();
        setTimeout(() => clear(), 1100);
    }
}

function botMakesMove()
{
    if(!AI_MOVE(cells)){
        let bot_move = bot.getFreeCell(cells);
        bot_move.textContent = "◯";
    }

    if(bot.checkWin(cells))
    {
        bot.animate(cells);
        bot.wins++;
        botScore.textContent = bot.wins;
        BOT_WIN.play();
        setTimeout(() => clear(), 1100);
    }
}


function clear(){
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = "";
    }
    waiting = false;
}

function isDraw()
{
    let x = Array.from(cells).every(cell => cell.textContent !== "");
    if(x)
    {
        drawAnimate();
        draw_counter++;
        tieScore.textContent = draw_counter;
        // clear();
        DRAW.play();
        setTimeout(() => clear(), 1100);
        return true;
    }
    return false;
}

function clearAnimations()
{
    for(let i = 0; i < cells.length; i++){
        cells[i].style.color = "#fff";
    }
}

function drawAnimate()
{
    for(let i = 0; i < cells.length; i++){
        cells[i].style.color = "#8B8989";
    }    
}