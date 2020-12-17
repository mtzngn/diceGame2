// player 1 against player 2, the one who reaches to 25 first will win!
//create the variables to be used in the game to avoid long lines
let scoreKeeper1 = 0;
let scoreKeeper2= 0;
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const newGame = document.getElementById("newGame");
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let image = document.getElementById("image")



roll.addEventListener("click", gameOn)

function gameOn() {
    while(parseInt(score1.textContent) < 25) {
        let diceNo = Math.floor(Math.random() * 6) + 1;
        if (diceNo == 1) {
            image.src = "./img/dice1.png"
        }
        else if (diceNo == 2) {
            image.src = "./img/dice2.png"
        }
        else if (diceNo == 3) {
            image.src = "./img/dice3.png"
        }
        else if (diceNo == 4) {
            image.src = "./img/dice4.png"
        }
        else if (diceNo == 5) {
            image.src = "./img/dice5.png"
        }
        else if (diceNo == 6) {
            image.src = "./img/dice6.png"
        }
        if (diceNo == 1) {

        }
        // scoreKeeper += diceNo;
        // score.textContent = scoreKeeper;
        if (scoreKeeper >= 25) {

        }
        break    
    }
}
