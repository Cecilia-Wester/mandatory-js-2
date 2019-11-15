const gameboard = document.querySelector('.gameboard');
const gamesquares = document.querySelectorAll('.gamesquare');
console.log(gamesquares);
let turn = 'O';
let gameOver = false;

function pickSquare(){
    for(let i = 0; i < gamesquares.length; i++){
        let gamesquare = gamesquares[i];
        gamesquare.addEventListener('click', function(e){
            if (gamesquare.textContent === ''){
                gamesquare.textContent = turn;
                takeTurn();
            } else {
                return;
            }
        });
    }
}

function takeTurn(){
    if(turn === 'O'){
        turn = 'X';
    } else {
        turn = 'O';
    }
    determenWinner();
}

// gör en funktion som tar tre argument tex x y och z som ska stämma överens med de arraysen som är i winnerCombos

function determenWinner(){
    if (gamesquares[0].textContent === 'X' && gamesquares[1].textContent === 'X' && gamesquares[2].textContent === 'X'){
        console.log('winnerX');
        alert('X is the Winner!')
        gameOver = true
        GameOver()
    } else if (gamesquares[3].textContent === 'X' && gamesquares[4].textContent === 'X' && gamesquares[5].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[6].textContent === 'X' && gamesquares[7].textContent === 'X' && gamesquares[8].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[0].textContent === 'X' && gamesquares[3].textContent === 'X' && gamesquares[6].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[1].textContent === 'X' && gamesquares[4].textContent === 'X' && gamesquares[7].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[2].textContent === 'X' && gamesquares[5].textContent === 'X' && gamesquares[8].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[0].textContent === 'X' && gamesquares[4].textContent === 'X' && gamesquares[8].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[2].textContent === 'X' && gamesquares[4].textContent === 'X' && gamesquares[6].textContent === 'X'){
        console.log('winnerX');
    } else if (gamesquares[0].textContent === 'O' && gamesquares[1].textContent === 'O' && gamesquares[2].textContent === 'O'){
        console.log('winnerO');
    } else if (gamesquares[3].textContent === 'O' && gamesquares[4].textContent === 'O' && gamesquares[5].textContent === 'O'){
        console.log('winnerO');
    } else if (gamesquares[6].textContent === 'O' && gamesquares[7].textContent === 'O' && gamesquares[8].textContent === 'O'){
        console.log('winnerO');
    } else if (gamesquares[0].textContent === 'O' && gamesquares[3].textContent === 'O' && gamesquares[6].textContent === 'O'){
        console.log('winnerO');
        alert('O is the winner!')
    } else if (gamesquares[1].textContent === 'O' && gamesquares[4].textContent === 'O' && gamesquares[7].textContent === 'O'){
        console.log('winnerO');
    } else if (gamesquares[2].textContent === 'O' && gamesquares[5].textContent === 'O' && gamesquares[8].textContent === 'O'){
        console.log('winnerO');
    } else if (gamesquares[0].textContent === 'O' && gamesquares[4].textContent === 'O' && gamesquares[8].textContent === 'O'){
        console.log('winnerO');
    } else if (gamesquares[2].textContent === 'O' && gamesquares[4].textContent === 'O' && gamesquares[6].textContent === 'O'){
        console.log('winnerO');
    }
}

//determenWinner();
pickSquare();
//const winnerCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

let resetbutton = document.querySelector('.reset');
resetbutton.addEventListener('click', function(e){
    for (let gamesquare of gamesquares){
        gamesquare.innerHTML = '';
        turn = 'O';
    }
});

function GameOver(){
    for(let i = 0; i < gamesquares.length; i++){
        let gamesquare = gamesquares[i];
        if (gameOver === true){
            console.log('Game Over!');
            gamesquare.removeEventListener('click', function(e){

            });
        }
    }
}

//GameOver();