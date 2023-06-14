'use strict';

//Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El= document.getElementById('score--0');
const score1El= document.getElementById('score--1');
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');

const diceEl= document.querySelector('.dice');
const btnNew= document.querySelector('.btn--new')
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');



//Starting Conditions
let currentScore,playing,scores,activePlayer;//amra ederke function er baire declare kore disi so that amra onno function e oder value reassign korte pari.

const inititialCondition= function(){

score0El.textContent=0;
score1El.textContent=0;

current0El.textContent= 0;
current1El.textContent=0;

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner')
player1El.classList.remove('player-=winner');
player1El.classList.remove('player--active');
player0El.classList.add('player--active');

scores=[0,0];
 currentScore= 0;
 activePlayer = 0
 playing=true
}

inititialCondition();




//if we define the value in the function, then jotobar dice roll korbe totobar notun kore score dekhabe. ar tai jodi amra chai je exisisting score er shathe notun value add hbe taile function er baire function define korte hbe

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent= 0;
   activePlayer = activePlayer === 0 ? 1:0;
   currentScore = 0;
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');//plsyer 0 te jodi active player thake taile remove kore dibe. ar jodi na thake taile add kore dibe. amra ekta class diye strt korsilam active player. duita clss ke toggling korle eta ensured hobe je jekono ekta class e active thakbe. arekta thakbe na.
   
}


//Rolling Dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
    //1.Generating dice roll

    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

   // 2.Display dice 
   diceEl.classList.remove('hidden');
   diceEl.src = `dice-${dice}.png`;

   //3.Check for rolled 1: if true switch to next player

   if(dice !==1){
    //add dice  to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else{
    //switch to next players
    switchPlayer()
   }
   }
})


btnHold.addEventListener('click', function(){
    if(playing){
   
    //1.add current score to the score of the active player
    scores[activePlayer]+= currentScore;//(score of the player who is currently active)
    //which means scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];

    //2.check score >=100 then finish the game
     if(scores[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
        playing = false;
        
     }
  //and if not then shift to another player
    else{
        switchPlayer()
    };
}
})

//Restarting the game
btnNew.addEventListener('click', inititialCondition);