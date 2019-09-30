class TicTacToe {
    constructor() {
        this.matrix=[['','',''],
                     ['','',''],
                     ['','','']];
        this.currentPlayerSymbol='x';        
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex]=='') {
            this.matrix[rowIndex][columnIndex]=this.currentPlayerSymbol;
            if(this.currentPlayerSymbol=='x') this.currentPlayerSymbol='o';else this.currentPlayerSymbol='x';
        }
    }

    isFinished() {
        if(this.isDraw()) return true;
        if(this.getWinner()!==null) return true;
        return false;
    }

    getWinner() {
        if(this.matrix[0][0]==this.matrix[1][1] && this.matrix[0][0]==this.matrix[2][2] && this.matrix[0][0]!=="") return this.matrix[0][0];
        if(this.matrix[2][0]==this.matrix[1][1] && this.matrix[2][0]==this.matrix[0][2] && this.matrix[2][0]!=="") return this.matrix[2][0];
        for(let i=0;i<3;i++){
            if(this.matrix[i][0]==this.matrix[i][1] && this.matrix[i][0]==this.matrix[i][2] && this.matrix[i][0]!=="") return this.matrix[i][0];
            if(this.matrix[0][i]==this.matrix[1][i] && this.matrix[0][i]==this.matrix[2][i] && this.matrix[0][i]!=="") return this.matrix[0][i];
        }
        return null;
    }

    noMoreTurns() {
        for( let i=0;i<3;i++){
            for( let j=0;j<3;j++){
                if(this.matrix[i][j]=='') return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns()==false) return false;
        if(this.getWinner()!==null)  return false;
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex]=='') return null;else return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
