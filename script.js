// player 1 against player 2, the one who reaches to 25 first will win!
//create the variables to be used in the game to avoid long lines
let scoreKeeper1 = 0;
let scoreKeeper2 = 0;
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
// we define the variable as when ever new game button clicked
//it should give starting values
function gameNew() {
    roll.style.display = "";
    hold.style.display = "";
    score1.textContent = "0"
    current1.textContent = "0"
    score2.textContent = "0"
    current2.textContent = "0"
    roll.addEventListener("click", gameRoll)
    whoPlays = true;
    player1.textContent = "Player 1"
    player2.textContent = "Player 2"
    scoreKeeper1 = 0;
    scoreKeeper2 = 0;
    hold.style.display = ""

}

//here is the roll button function
// creates the dice according the random number and displays the picture on screen
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
// here it handles the part when hold button clicked
// if whoPlays is true than player 1 is playing, 
// if whoPlays return false than player 2 is playing.
        if (whoPlays == true && diceNo != 1) {
            scoreKeeper1 += diceNo;
            current1.textContent = scoreKeeper1;
            hold.addEventListener("click", ()=>{ 
                score1.textContent = current1.textContent;
                whoPlays = false;
                hold.style.display = "none"
                
            })
            if (scoreKeeper1 >= 25) {
                player1.textContent = "Winner!"
                score1.textContent = scoreKeeper1;
                roll.style.display = "none";
                hold.style.display = "none";
                scoreKeeper1 = 0;
             } 
        } else if (whoPlays == false && diceNo != 1) {
            scoreKeeper2 += diceNo;
            current2.textContent = scoreKeeper2;
            hold.addEventListener("click", ()=>{ 
                score2.textContent = current2.textContent;
                whoPlays = true;
            })

            if (scoreKeeper2 >= 25) {
                player2.textContent = "Winner!"
                score2.textContent = scoreKeeper2;
                roll.style.display = "none";
                hold.style.display = "none";
                scoreKeeper2 = 0;
                whoPlays = true
             }
        } else if (whoPlays == false && diceNo == 1) {
            score2.textContent = "0";
            current2.textContent = "0";
            scoreKeeper2 = 0;
            whoPlays = true;
        } 
        else {
            score1.textContent = "0";
            current1.textContent = "0";
            scoreKeeper1 = 0;
            whoPlays = false;
        }
        break    
    }
}