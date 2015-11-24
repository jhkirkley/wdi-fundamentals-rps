var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
                    
console.log(checkerboard);

console.log("Setting Piece");

function setSquare(player, row, col) {
    checkerboard[row][col] = player;
    return checkerboard
}
setSquare ("R",3,5);

console.log(checkerboard);

function getPieceAt(row, col) {
   return checkerboard[row][col];
}
console.log(getPieceAt(3, 5));

function clearBoard(array){
    for(var i = 0; i < array.length; i++) {
    var inner = array[i];
    for(var j = 0; j < inner.length; j++) {
        array[i][j] = null;
    }
}
}
clearBoard(checkerboard);

console.log (checkerboard);

function setUpRed(array) {
    for(var i = 0; i < 3; i++) {
    var inner = array[i];
    for(var j = 0; j < inner.length; j++) {
        if (j % 2 === 0){array[i][j] = "R";}
        else {array[i][j] = null;}
    }
}
}

setUpRed(checkerboard);

function setUpBlack(array) {
    for(var i = 5; i < 8; i++) {
    var inner = array[i];
    for(var j = 0; j < inner.length; j++) {
        if (j % 2 === 1){array[i][j] = "B";}
        else {array[i][j] = null;}
    }
}
}
setUpBlack(checkerboard);


console.log (checkerboard);

var pieces = {
    'red':[{'row':0,'col': 0}, {'row':0,'col': 2}, {'row':0,'col': 4},{'row':0,'col': 6},
    {'row':1,'col': 1},{'row':1,'col': 3},{'row':1,'col': 5}, {'row':1,'col': 7},
    {'row':2,'col': 0},{'row':2,'col': 2}, {'row':2,'col': 4}, {'row':2,'col': 6}
    ],

     'black':[{'row': 5,'col': 1}, {'row: 5,'col': 3}, {'row': 5,'col': 5},{'row': 5,'col': 7},
    {'row': 6,'col': 0},{'row': 6,'col': 2},{'row': 6,'col': 4}, {'row':6,'col': 6},
    {'row': 7,'col': 1},{'row': 7,'col': 3}, {'row': 7,'col': 5}, {'row': 7,'col': 7}
    ],
} 