// player 1 against player 2, the one who reaches to 25 first will win!
//create the variables to be used in the game to avoid long lines
let scoreKeeper = 0;
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const newGame = document.getElementById("newGame");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let image = document.getElementById("image");
let current1 = document.getElementById("current1");
let current2 = document.getElementById("current2");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let whoPlays = true;
//hide the buttons roll and hold before the game starts
roll.style.display = "none";
hold.style.display = "none";



newGame.addEventListener("click", gameNew)

function gameNew() {
    roll.style.display = "";
    hold.style.display = "";
    score1.textContent = "0"
    current1.textContent = "0"
    score2.textContent = "0"
    current2.textContent = "0"
    roll.addEventListener("click", gameRoll)
}
function gameRoll() {
    while(parseInt(current1.textContent) < 25 && parseInt(current2.textContent) < 25) {

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
        // makes the score of that player 0 and gives to next player
        }


        if (whoPlays == true) {
            scoreKeeper += diceNo;
            current1.textContent = scoreKeeper;
            hold.addEventListener("click", ()=>{ 
                scoreKeeper = 0;
                score1.textContent = current1.textContent;
                whoPlays = false;
                
            })
            if (scoreKeeper >= 25) {
                player1.textContent = "Winner!"
                score1.textContent = scoreKeeper;
                roll.style.display = "none";
                hold.style.display = "none";
                scoreKeeper = 0;
             } 
             
        } else {
            scoreKeeper += diceNo;
            current2.textContent = scoreKeeper;
            hold.addEventListener("click", ()=>{ 
                scoreKeeper = 0;
                score2.textContent = current2.textContent;
                whoPlays = true;
                
            })
            if (scoreKeeper >= 25) {
                player2.textContent = "Winner!"
                score2.textContent = scoreKeeper;
                roll.style.display = "none";
                hold.style.display = "none";
                scoreKeeper = 0;
                whoPlays = true
             }

        }


        break    
    }
}