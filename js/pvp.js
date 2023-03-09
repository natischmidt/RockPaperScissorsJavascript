let player1score = 0;
let player2score = 0;
let moves = 0;


//wip

// function refreshGame() {
//     setInterval(refreshGameInfo, 3000);
// }
function winnerchickendinner(playeroneMove, playertwoMove){
    if(playeroneMove === playertwoMove){
        console.log('Draw');
        return;
    }
    if(playeroneMove === 'Rock'){
        if(playertwoMove === 'Scissor'){
            totalPlayerOne += 1;
        }
        if(playertwoMove === 'Paper'){
            totalPlayerTwo += 1;
        }
    }
    if(playeroneMove === 'Scissor'){
        if(playertwoMove === 'Rock'){
            totalPlayerTwo += 1;
        }
        if(playertwoMove === 'Paper'){
            totalPlayerOne += 1;
        }
    }
    if(playeroneMove === 'Paper'){
        if(playertwoMove === 'Rock'){
            totalPlayerOne += 1;
        }
        if(playertwoMove === 'Scissor'){
            totalPlayerTwo += 1;
        }
    }
}

function refreshGameInfo() {
    rpsApi.gameInfo(rpsApi.getGameId())
        .then(data => console.log(data));
}