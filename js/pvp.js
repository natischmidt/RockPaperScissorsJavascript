let player1score = 0;
let player2score = 0;
let moves = 0;


//WIP
function refreshGame() {
    setInterval(refreshGameInfo, 3000);
}

function refreshGameInfo() {
    rpsApi.gameInfo(rpsApi.getGameId())
        .then(data => console.log(data));
}