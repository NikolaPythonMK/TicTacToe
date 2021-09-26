export class Player{
    constructor(symbol){
        this.symbol = symbol;
        this.wins = 0;
    }

    checkWin(cells){       //returns true if the player/bot gets 3x in a row/column/diagonal
        return (this.matchByRows(cells) || this.matchByColumns(cells) || this.matchByDiagonals(cells))
    }

    matchByRows(cells){
        if(cells[0].innerHTML === this.symbol && cells[1].innerHTML === this.symbol && cells[2].innerHTML === this.symbol ||
            cells[3].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[5].innerHTML === this.symbol ||
            cells[6].innerHTML === this.symbol && cells[7].innerHTML === this.symbol && cells[8].innerHTML === this.symbol) {
            return true;
        }
        return false;
    }

    matchByColumns(cells){
        if(cells[0].innerHTML === this.symbol && cells[3].innerHTML === this.symbol && cells[6].innerHTML === this.symbol ||
            cells[1].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[7].innerHTML === this.symbol ||
            cells[2].innerHTML === this.symbol && cells[5].innerHTML === this.symbol && cells[8].innerHTML === this.symbol) {
            return true;
        }
        return false;
    }

    matchByDiagonals(cells){
        if(cells[0].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[8].innerHTML === this.symbol ||
            cells[2].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[6].innerHTML === this.symbol) {
            return true;
        }
        return false;   
    }

    getCellIndexes(cells){
        if(cells[0].innerHTML === this.symbol && cells[1].innerHTML === this.symbol && cells[2].innerHTML === this.symbol ){
            return [0, 1, 2];
        }
        else if(cells[3].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[5].innerHTML === this.symbol ){
            return [3, 4, 5];
        }
        else if(cells[6].innerHTML === this.symbol && cells[7].innerHTML === this.symbol && cells[8].innerHTML === this.symbol ){
            return [6, 7, 8];
        }
        if(cells[0].innerHTML === this.symbol && cells[3].innerHTML === this.symbol && cells[6].innerHTML === this.symbol ){
            return [0, 3, 6];
        }
        else if(cells[1].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[7].innerHTML === this.symbol ){
            return [1, 4, 7];
        }
        else if(cells[2].innerHTML === this.symbol && cells[5].innerHTML === this.symbol && cells[8].innerHTML === this.symbol ){
            return [2, 5, 8];
        }
        else if(cells[0].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[8].innerHTML === this.symbol ){
            return [0, 4, 8];
        }
        else if(cells[2].innerHTML === this.symbol && cells[4].innerHTML === this.symbol && cells[6].innerHTML === this.symbol ){
            return [2, 4, 6];
        }
    }

    animate(cells)
    {
        let winnerIndexes = this.getCellIndexes(cells);
        for(let i = 0; i < winnerIndexes.length; i++){
            cells[winnerIndexes[i]].style.color = "#7fff00";   
        }
    }
}

export class Bot extends Player{
    constructor(symbol){
        super(symbol);
    }

    getFreeCell(cells){
        const freeCells = Array.from(cells).filter(cell => cell.innerHTML === "");
        const randomNumber = Math.floor(Math.random() * freeCells.length);
        return freeCells[randomNumber];
    }

    animate(cells)
    {
        let winnerIndexes = this.getCellIndexes(cells);
        for(let i = 0; i < winnerIndexes.length; i++){
            cells[winnerIndexes[i]].style.color = "#cc0000";
        }
    }
}


