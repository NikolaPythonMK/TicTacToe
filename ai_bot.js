import {X_SYMBOL, O_SYMBOL} from './game.js'

function AI_MOVE(array)
{
    if(array[0].innerHTML === O_SYMBOL && array[2].innerHTML === O_SYMBOL && array[1].innerHTML === "")
    {
        array[1].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[3].innerHTML === O_SYMBOL && array[5].innerHTML === O_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[6].innerHTML === O_SYMBOL && array[8].innerHTML === O_SYMBOL && array[7].innerHTML === "")
    {
        array[7].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[0].innerHTML === O_SYMBOL && array[1].innerHTML === O_SYMBOL && array[2].innerHTML === "")
    {
        array[2].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[1].innerHTML === O_SYMBOL && array[2].innerHTML === O_SYMBOL && array[0].innerHTML === "")
    {
        array[0].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[3].innerHTML === O_SYMBOL && array[4].innerHTML === O_SYMBOL && array[5].innerHTML === "")
    {
        array[5].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[5].innerHTML === O_SYMBOL && array[4].innerHTML === O_SYMBOL && array[3].innerHTML === "")
    {
        array[3].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[6].innerHTML === O_SYMBOL && array[7].innerHTML === O_SYMBOL && array[8].innerHTML === "")
    {
        array[8].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[7].innerHTML === O_SYMBOL && array[8].innerHTML === O_SYMBOL && array[6].innerHTML === "")
    {
        array[6].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[0].innerHTML === O_SYMBOL && array[6].innerHTML === O_SYMBOL && array[3].innerHTML === "")
    {
        array[3].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[1].innerHTML === O_SYMBOL && array[7].innerHTML === O_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[2].innerHTML === O_SYMBOL && array[8].innerHTML === O_SYMBOL && array[5].innerHTML === "")
    {
        array[5].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[0].innerHTML === O_SYMBOL && array[3].innerHTML === O_SYMBOL && array[6].innerHTML === "")
    {
        array[6].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[1].innerHTML === O_SYMBOL && array[4].innerHTML === O_SYMBOL && array[7].innerHTML === "")
    {
        array[7].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[2].innerHTML === O_SYMBOL && array[5].innerHTML === O_SYMBOL && array[8].innerHTML === "")
    {
        array[8].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[3].innerHTML === O_SYMBOL && array[6].innerHTML === O_SYMBOL && array[0].innerHTML === "")
    {
        array[0].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[4].innerHTML === O_SYMBOL && array[7].innerHTML === O_SYMBOL && array[1].innerHTML === "")
    {
        array[1].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[5].innerHTML === O_SYMBOL && array[8].innerHTML === O_SYMBOL && array[2].innerHTML === "")
    {
        array[2].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    //main diagonal
    else if(array[0].innerHTML === O_SYMBOL && array[4].innerHTML === O_SYMBOL && array[8].innerHTML === "")
    {
        array[8].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[4].innerHTML === O_SYMBOL && array[8].innerHTML === O_SYMBOL && array[0].innerHTML === "")
    {
        array[0].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[0].innerHTML === O_SYMBOL && array[8].innerHTML === O_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    //2nd diagonal
    else if(array[2].innerHTML === O_SYMBOL && array[4].innerHTML === O_SYMBOL && array[6].innerHTML === "")
    {
        array[6].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[6].innerHTML === O_SYMBOL && array[4].innerHTML === O_SYMBOL && array[2].innerHTML === "")
    {
        array[2].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[2].innerHTML === O_SYMBOL && array[6].innerHTML === O_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }

    //x
    else if(array[0].innerHTML === X_SYMBOL && array[2].innerHTML === X_SYMBOL && array[1].innerHTML === "")
    {
        array[1].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[3].innerHTML === X_SYMBOL && array[5].innerHTML === X_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[6].innerHTML === X_SYMBOL && array[8].innerHTML === X_SYMBOL && array[7].innerHTML === "")
    {
        array[7].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[0].innerHTML === X_SYMBOL && array[1].innerHTML === X_SYMBOL && array[2].innerHTML === "")
    {
        array[2].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[1].innerHTML === X_SYMBOL && array[2].innerHTML === X_SYMBOL && array[0].innerHTML === "")
    {
        array[0].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[3].innerHTML === X_SYMBOL && array[4].innerHTML === X_SYMBOL && array[5].innerHTML === "")
    {
        array[5].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[5].innerHTML === X_SYMBOL && array[4].innerHTML === X_SYMBOL && array[3].innerHTML === "")
    {
        array[3].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[6].innerHTML === X_SYMBOL && array[7].innerHTML === X_SYMBOL && array[8].innerHTML === "")
    {
        array[8].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[7].innerHTML === X_SYMBOL && array[8].innerHTML === X_SYMBOL && array[6].innerHTML === "")
    {
        array[6].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[0].innerHTML === X_SYMBOL && array[6].innerHTML === X_SYMBOL && array[3].innerHTML === "")
    {
        array[3].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[1].innerHTML === X_SYMBOL && array[7].innerHTML === X_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[2].innerHTML === X_SYMBOL && array[8].innerHTML === X_SYMBOL && array[5].innerHTML === "")
    {
        array[5].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[0].innerHTML === X_SYMBOL && array[3].innerHTML === X_SYMBOL && array[6].innerHTML === "")
    {
        array[6].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[1].innerHTML === X_SYMBOL && array[4].innerHTML === X_SYMBOL && array[7].innerHTML === "")
    {
        array[7].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[2].innerHTML === X_SYMBOL && array[5].innerHTML === X_SYMBOL && array[8].innerHTML === "")
    {
        array[8].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    else if(array[3].innerHTML === X_SYMBOL && array[6].innerHTML === X_SYMBOL && array[0].innerHTML === "")
    {
        array[0].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[4].innerHTML === X_SYMBOL && array[7].innerHTML === X_SYMBOL && array[1].innerHTML === "")
    {
        array[1].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[5].innerHTML === X_SYMBOL && array[8].innerHTML === X_SYMBOL && array[2].innerHTML === "")
    {
        array[2].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    //main diagonal
    else if(array[0].innerHTML === X_SYMBOL && array[4].innerHTML === X_SYMBOL && array[8].innerHTML === "")
    {
        array[8].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[4].innerHTML === X_SYMBOL && array[8].innerHTML === X_SYMBOL && array[0].innerHTML === "")
    {
        array[0].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[0].innerHTML === X_SYMBOL && array[8].innerHTML === X_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }
    //2nd diagonal
    else if(array[2].innerHTML === X_SYMBOL && array[4].innerHTML === X_SYMBOL && array[6].innerHTML === "")
    {
        array[6].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[6].innerHTML === X_SYMBOL && array[4].innerHTML === X_SYMBOL && array[2].innerHTML === "")
    {
        array[2].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;    
    }
    else if(array[2].innerHTML === X_SYMBOL && array[6].innerHTML === X_SYMBOL && array[4].innerHTML === "")
    {
        array[4].innerHTML = O_SYMBOL;
        // BOT_CLICK.play();
        return true;
    }

    return false;
}

export {AI_MOVE};