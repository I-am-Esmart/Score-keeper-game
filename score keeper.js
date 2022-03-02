const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#player2')

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let gameOver = false
 

p1Button.addEventListener('click', function(){
                    if (!gameOver) {
                                        p1score += 1;
                    
                    
                    if(p1score === winningScore) {
                                        gameOver=true;
                                        p1Display.classList.add('winner')
                                        p2Display.classList.add('loser')
                                        alert('Game over, Player 1 won!')
                    }
                    p1Display.textContent = p1score;
        }
})



p2Button.addEventListener('click', function(){
                    if (!gameOver) {
                                        p2score += 1;                            
                    if(p2score === winningScore) {
                                        gameOver=true;
                                        p2Display.classList.add('winner')
                                        p1Display.classList.add('loser')
                                        alert('Game over, Player 2 won!')
                    }
                    p2Display.textContent = p2score;
        }
})


winningScoreSelect.addEventListener('change', function() {
                    winningScore = parseInt(this.value) 
                   reset(); 
})



resetButton.addEventListener('click', function reset() {
                    gameOver = false;
                    p1score = 0;
                    p2score = 0;
                    p1Display.textContent = 0
                    p2Display.textContent = 0
})

resetButton.addEventListener('click', reset)


function reset(){
                    gameOver = false;
                    p1score = 0;
                    p2score = 0;
                    p1Display.textContent = 0;
                    p2Display.textContent = 0 ;
                    p1Display.classList.remove('winner', 'loser');
                    p2Display.classList.remove('winner', 'loser');
}