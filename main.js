// you can apply more features. like : no win, draw, or lose

// DOM
const computerChoiceDOM = document.querySelector('.computer-choice');
const userChoiceDOM = document.querySelector('.user-choice');
const resultDOM = document.querySelector('.result');
const scoreDOM = document.querySelector('.score');

// Choices
const choicesDOM = document.querySelector('.choices');
const buttons = document.getElementsByTagName('button')
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const choices = [btnRock.textContent, btnPaper.textContent, btnScissors.textContent];

// Messages
const win = 'You won!✌';
const lose = 'You lost!💔';
const draw = 'Draw!🤷‍♀️';

///////////////////////////////////////////////

// choicesDOM.addEventListener('click', function(e){
//     const userChoice = generateUserChoice(e);

//     const computerChoice = generateComputerChoice();

//     // Show Result
//     referee(userChoice, computerChoice);
// });
[...buttons].forEach(element => {
    element.addEventListener('click', function(e){
    const userChoice = generateUserChoice(e);
    const computerChoice = generateComputerChoice();
    // Show Result
    referee(userChoice, computerChoice);

    })
});

const generateUserChoice = function(e){
    // Extract User's Choice
    const clickedItem = e.target.closest('.choice-btn');
    if(!clickedItem) return;

    // Put User's Choice in DOM
    const userChoice = clickedItem.textContent;
    userChoiceDOM.innerHTML = userChoice;

    return userChoice;
}

const generateComputerChoice = function(){
    // Generate Base Number
    const baseNumber = Math.floor(Math.random() * choices.length);

    // Use Base Number To Apply Computer Choice
    const computerChoice = choices[baseNumber];

    // Put User's Choice in DOM
    computerChoiceDOM.innerHTML = computerChoice;

    return computerChoice;
}

let score = 0;
const referee = function(uc,cc){
    // If Draw
    if(uc === cc)
    resultDOM.innerHTML = draw;

    // user take rock
    if(uc === 'rock' && cc === 'paper'){
        resultDOM.innerHTML = lose;
        score--;
        scoreDOM.innerHTML = score;
    }
    
    if(uc === 'rock' && cc === 'scissors'){
        resultDOM.innerHTML = win;
        score++
        scoreDOM.innerHTML = score;
    }
    

    // user take paper
    if(uc === 'paper' && cc === 'rock'){
        resultDOM.innerHTML = win;
        score++
        scoreDOM.innerHTML = score;
    }
    if(uc === 'paper' && cc === 'scissors'){
        resultDOM.innerHTML = lose;
        score--;
        scoreDOM.innerHTML = score;
    }

    // user take scissors
    if(uc === 'scissors' && cc === 'rock'){
        resultDOM.innerHTML = lose;
        score--;
        scoreDOM.innerHTML = score;
    }
    if(uc === 'scissors' && cc === 'paper'){
        resultDOM.innerHTML = win;
        score++
        scoreDOM.innerHTML = score;
    }
}