// zad 6

function pickWinner(playerOneAnswer, playerTwoAnswer) {
    if ((playerOneAnswer === 'rock' && playerTwoAnswer === 'rock')
        || (playerOneAnswer === 'paper' && playerTwoAnswer === 'paper')
        || (playerOneAnswer ==='scissors' && playerTwoAnswer === 'scissors')) {
        console.log("Remiz");
    }
    else if ((playerTwoAnswer === 'rock' && playerOneAnswer === 'paper')
        || (playerTwoAnswer === 'scissors' && playerOneAnswer === 'rock')
        || (playerTwoAnswer === 'paper' && playerOneAnswer === 'scissors')) {
        console.log("Gracz 1 wygrał");
    }
    else if ((playerOneAnswer === 'rock' && playerTwoAnswer === 'paper')
        || (playerOneAnswer === 'scissors' && playerTwoAnswer === 'rock')
        || (playerOneAnswer === 'paper' && playerTwoAnswer === 'scissors')) {
        console.log("Gracz 2 wygrał");
    } else {
        console.log("Błędne informacje ");
    }
}
pickWinner('rock', 'paper');