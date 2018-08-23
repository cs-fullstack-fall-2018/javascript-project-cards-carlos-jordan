const cards = [
    { cardNumber: 6, type: 'h' },
    { cardNumber: 9, type: 'd' },
    { cardNumber: 2, type: 'h' },
    { cardNumber: 9, type: 'h' },
    { cardNumber: 14, type: 'h' },
    { cardNumber: 6, type: 'c' },
    { cardNumber: 2, type: 'd' },
    { cardNumber: 9, type: 's' },
    { cardNumber: 12, type: 'h' },
    { cardNumber: 10, type: 'c' },
    { cardNumber: 14, type: 'c' },
    { cardNumber: 7, type: 'd' },
    { cardNumber: 3, type: 's' },
    { cardNumber: 8, type: 'd' },
    { cardNumber: 12, type: 's' },
    { cardNumber: 7, type: 's' },
    { cardNumber: 7, type: 'c' },
    { cardNumber: 14, type: 'd' },
    { cardNumber: 11, type: 'c' },
    { cardNumber: 10, type: 's' },
    { cardNumber: 11, type: 'd' },
    { cardNumber: 4, type: 'd' },
    { cardNumber: 2, type: 's' },
    { cardNumber: 7, type: 'h' },
    { cardNumber: 14, type: 's' },
    { cardNumber: 10, type: 'h' },
    { cardNumber: 5, type: 'c' },
    { cardNumber: 12, type: 'c' },
    { cardNumber: 6, type: 's' },
    { cardNumber: 5, type: 's' },
    { cardNumber: 12, type: 'd' },
    { cardNumber: 4, type: 'h' },
    { cardNumber: 11, type: 'h' },
    { cardNumber: 13, type: 'c' },
    { cardNumber: 5, type: 'h' },
    { cardNumber: 6, type: 'd' },
    { cardNumber: 13, type: 's' },
    { cardNumber: 13, type: 'd' },
    { cardNumber: 8, type: 'c' },
    { cardNumber: 4, type: 's' },
    { cardNumber: 13, type: 'h' },
    { cardNumber: 2, type: 'c' },
    { cardNumber: 8, type: 's' },
    { cardNumber: 10, type: 'd' },
    { cardNumber: 3, type: 'c' },
    { cardNumber: 3, type: 'h' },
    { cardNumber: 11, type: 's' },
    { cardNumber: 8, type: 'h' },
    { cardNumber: 9, type: 'c' },
    { cardNumber: 5, type: 'd' },
    { cardNumber: 3, type: 'd' },
    { cardNumber: 4, type: 'c' } ];

var player1Deck = [];
var player2Deck = [];
var player1Score = document.getElementById('score1');
var player2Score = document.getElementById('score2');
var startButton = document.getElementById('start');
var winner= document.getElementById('notification');
var reset = document.getElementById('reset');
var i = 0;
var x = 0;


player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);

function runGame() {

            if (player1Deck[i].cardNumber > player2Deck[x].cardNumber) {
                console.log('Player 1 wins this round');
                console.log(player1Deck[i].cardNumber);
                console.log(player2Deck[x].cardNumber);
                player1Score.innerHTML ++;
                i++;
                winner.innerHTML  = "Player 1 Won This Round";


            } else if (player1Deck[i].cardNumber < player2Deck[x].cardNumber) {
                console.log('Player 2 wins this round');
                console.log(player1Deck[i].cardNumber);
                console.log(player2Deck[x].cardNumber);
                player2Score.innerHTML ++;
                i++;
                winner.innerHTML  = "Player 2 Won This Round";

            } else if (player1Deck[i].cardNumber == player2Deck[x].cardNumber) {
                console.log('Issa tie');
                console.log(player1Deck[i].cardNumber);
                console.log(player2Deck[x].cardNumber);
                i++;
                x++;
                winner.innerHTML  = "It's a Tie!";


            }
}
startButton.addEventListener("click", runGame);


//Generate an Entirely new deck!
function reshuffleReset() {


    var cards = new Array();
    var typeArray = ["s", "d", "c", "h"];
    var cardNumberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var newP1score = 0;
    var newP2score = 0;
    x = newP2score;
    i = newP1score;
    player1Score.innerHTML= i;
    player2Score.innerHTML= x;

    for (let o = 0; o < typeArray.length; o++) {
        for (let p = 0; p < cardNumberArray.length; p++) {
            let card = {cardNumber: cardNumberArray[p], type: typeArray[o]};
            cards.push(card);
        }
    }

    for (var o = 0; o < 10000; o++) {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;
    }
    player1Deck = cards.slice();
    player2Deck = player1Deck.splice(1, 26);

    startButton.addEventListener("click", runGame);

}
reset.addEventListener('click', reshuffleReset);
