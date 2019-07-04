'use strict';

let randomNumber = Math.floor(Math.random()*100+1);

const guessField = document.querySelector("#guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const max_guess = 5;

let count = 0;
let resetButton;

const hd = document.querySelector("h1");
hd.textContent += ` ${randomNumber}`

function checkGuess(){
    count++;
    let guess = Number(guessField.value);
    if(guess === randomNumber){
        lastResult.textContent = "Right";
        lastResult.style.backgroundColor = "green";
    }
    else{
        if(count === max_guess){
            endGame();
            return;
        }
        guesses.textContent += guess + ' '

        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "red";
        if(guess < randomNumber){
            lowOrHi.textContent = "Too low!"
        }
        else{
            lowOrHi.textContent = "Too high!"
        }

    }

}

function myFunc(){
    alert('Submitting');
}

guessSubmit.addEventListener('click', myFunc);
guessSubmit.addEventListener('click', checkGuess);

function endGame(){
    //alert("Game Over!");
    guessField.value = '';

    let messages = document.querySelectorAll(".resultParas p");
    messages.forEach((e)=>e.textContent='');

    guessField.disabled = true;
    guessSubmit.disabled = true;
    if(typeof(resetButton) == "undefined" ){
        resetButton = document.createElement('button');
        resetButton.textContent = "Start Over";
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);

    }
    /*
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }*/

}

function resetGame(){
    //alert("Resetting...");
    randomNumber = Math.floor(Math.random()*100+1);
    hd.textContent = "Guessing "+randomNumber;
    count = 0;
    guessField.disabled = false;
    guessSubmit.disabled = false;
}