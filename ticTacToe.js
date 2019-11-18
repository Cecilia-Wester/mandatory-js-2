const gameboard = document.querySelector('.gameboard');
const gamesquares = document.querySelectorAll('.gamesquare');
let turn = 'O';
let gameOver = false;
let rounds = 0;

function pickSquare(){
    for(let i = 0; i < gamesquares.length; i++){
        let gamesquare = gamesquares[i];
        gamesquare.addEventListener('click', function(e){
            if (gameOver === true) return;
            if (gamesquare.textContent === ''){
                gamesquare.textContent = turn;
                takeTurn();
            } else {
                return;
            }
        });
    }
}

pickSquare();


function takeTurn(){
    if(turn === 'O'){
        turn = 'X';
    } else {
        turn = 'O';
    }
    rounds++;
    let oWon = determenWinner("O");
    let xWon = determenWinner("X");
    if (oWon) {
        gameOver = true;
        endGame('O is the Winner')
    } else if (xWon) {
        gameOver = true;
        endGame('X is the winner')
    } else if (rounds === 9){
        endGame('It´s a tie')
        gameOver = true;
    }
}


const winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function determenWinner(type){
    for(let i = 0; i < winnerCombos.length; i++){
        let winner = true;
        for (let j = 0; j < winnerCombos[i].length; j++){
            let value = winnerCombos[i][j];
            if (gamesquares[value].textContent !== type){
                winner = false;
            }
        }
        if (winner === true) {
            console.log('The winner is ', type);
            return true;
        } 
    }
    return false;
}


let resetbutton = document.querySelector('.reset');
resetbutton.addEventListener('click', function(e){
    for (let gamesquare of gamesquares){
        gamesquare.innerHTML = '';
        turn = 'O';
        gameOver = false;
        rounds = 0;
    }
});

function endGame(text){
    let endGameDiv = document.querySelector('.endGame')
    let textX = document.querySelector('.endGame p');
    endGameDiv.style.display = 'block';
    textX.textContent = text;
    let buttonOk = document.querySelector('.buttonOk');
    buttonOk.addEventListener('click', function(e){
        endGameDiv.style.display = 'none';
    });

}



