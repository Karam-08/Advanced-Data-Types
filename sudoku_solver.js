const _BOARD = [
    [".", "9", ".", ".", "4", "2", "1", "3", "6"],
    [".", ".", ".", "9", "6", ".", "4", "8", "5"],
    [".", ".", ".", "5", "8", "1", ".", ".", "."],

    [".", ".", "4", ".", ".", ".", ".", ".", "."],
    ["5", "1", "7", "2", ".", ".", "9", ".", "."],
    ["6", ".", "2", ".", ".", ".", "2", "7", "."],

    ["1", ".", ".", "8", ".", "4", ".", "2", "."],
    ["7", ".", "6", ".", ".", ".", "8", "1", "."],
    ["3", ".", ".", ".", "9", ".", ".", ".", "."],
]

const _QUADS = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],

    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],

    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
]

function getRow(board, row){
    // Returns an array with all of the array elements from the row
    return board[row]
}

function getCol(board, col){
    // Returns an array with all of the array elements from the column
    let inCol = []
    for(row in board){
        inCol.push(board[row][col])
    }
    return inCol
}

// console.log(getCol(_BOARD, 7)) 

function getQuad(board, quadNum){
    // Creates an array with all of the elements in the same quadrant
    let inQuad = []
    for(row in board){
        for(col in board[row]){
            if(_QUADS[row][col] == quadNum){
                inQuad.push(board[row][col])
            }
        }
    }
    return inQuad;
}

// console.log(getQuad(_BOARD, 6))

// For any [row][col] on the board you will return the array of all possible numbers

function getPossible(board, row, col){
    let inRow = getRow(board, row);
    let inCol = getCol(board, col);
    let inQuad = getQuad(board, _QUADS[row][col])

    let possible = [];
    let used = [];

    // Every row element that isn't possible
    // Remove any that have already been added
    for(r in inRow){
        let included = false
        for(u in used){
            if(inRow[r] == used[u]){
                included = true;
                break
            }
        }
        if(!included){
            used.push(inRow[r]);
        }
    }

    for(c in inCol){
        let included = false;
        for(u in used){
            if(inCol[c] == used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inCol[c]);
        }
    }

    for(q in inQuad){
        let included = false;
        for(u in used){
            if(inQuad[q] == used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inQuad[q]);
        }
    }

    for(u in used){
        if(used[u] == '.'){
            used.splice(u, 1);
        }
    }

    for(let num = 1; num < 10; num++){
        if(!used.includes(num + "")){
            possible.push(num + "")
        }
    }
    
    return possible
}

let updated = true;

function fillInCol(board, row, col){
    if(board[row][col] == '.'){
        let possible = getPossible(board, row, col)

        if(possible.length == 1){
            board[row][col] = possible[0]
            updated = true;
        } 
    }
}

while(updated){
    updated = false
    for(row2 in _BOARD){
        for(col in _BOARD[row2]){
            fillInCol(_BOARD, row2, col)
        }
    }
}

console.table(_BOARD)