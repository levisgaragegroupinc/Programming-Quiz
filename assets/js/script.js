//Object with collection of properties made up of key value pairs.
var interrogation = [
    {
        queryTitle: 'Which statement is true about while loops?',
        choice: ['while loops will run at least once, then will run again if their condition is true.',
                 'while loops evaluate a condition for however long it is true and the looping stops when the condition is false.',
                 'while loops always loop over a code block a known amount of times.',
                 'while loops only run while the condition is false.'],
        ans: 'while loops evaluate a condition for however long it is true and the looping stops when the condition is false.'         
    },
    {
        queryTitle: 'What is the general purpose of a loop?',
        choice: ['Loops iterate through arrays to find elements.',
                 'Loops read and recreate code automatically.',
                 'All loops help the computer make decisions automatically.',
                 'Loops automatically iterate a block of code based on conditions.'],
        ans: 'Loops automatically iterate a block of code based on conditions.'
    },
    {
        queryTitle: 'You want to run a code block at least once, then loop as long as a condition remains true. Which kind of loop would you use?',
        choice: ['A nested for loop.',
                 'A do...while statement.',
                 'A for statement.',
                 'A while statement.'],
        ans: 'A do...while statement.'
    },
    {
        queryTitle: 'What do nested for loops do?',
        choice: ['Nested for loops run the same code twice.',
                 'Nested for loops allow us to double check our if...else statements.',
                 'Nested for loops allow us to run multiple for loops at once.',
                 'Nested for loops are bad because they run forever.'],
        ans: 'Nested for loops allow us to run multiple for loops at once.'
    },
    {
        queryTitle: 'Which statement is true about for loops?',
        choice: ['for loops always count from 0 upwards.',
                 'for loops are appropriate when looping a predetermined number of times.',
                 'for loops can never result in an infinite loop.',
                 'for loops always run an unknown number of times.'],
        ans: 'for loops are appropriate when looping a predetermined number of times.'
    },
];

//Starting variables. Score and quiz index value.
var quizScore = 0;
var quizIndex = 0; 

//Variables that access elements on the page. 
var quizClock = document.querySelector("#quizClock");
var quizStart = document.querySelector("#quizStart");
var quizQueries = document.querySelector("#quizQueries");
var mainWrapper = document.querySelector("#mainWrapper");
var quizRestart = document.querySelector('#quizRestart');
var quizScores = document.querySelector('#quizScores');
var quizScoreboard = document.querySelector('#quizScoreboard');

//Variables for time left, time remaining, penalty, and creating a ul element. 
var secondsRemain = 100;
var quizPenalty = 5;
var quizTimeInterval = 0;
var quizUlElement = document.createElement('ul');

//Take quiz button starts timer. First event listener and function.
quizStart.addEventListener('click', function (){
    if(quizTimeInterval === 0) {
        quizTimeInterval = setInterval(function (){
            secondsRemain--;
            quizClock.textContent = "Quiz time: " + secondsRemain;

            if (secondsRemain <= 0) {
                clearInterval(quizTimeInterval);
                quizComplete() // function defined on line 134.
                quizClock.textContent = "Quiz time has ended!";
            }            
        }, 1000);
    };
    quizDisplay(quizIndex); //function defined on line 83.
});

//Function that displays the user choices.
function quizDisplay(quizIndex) {
    quizQueries.innerHTML = "";
    quizUlElement.innerHTML = "";

    for (var i = 0; i < interrogation.length; i++) {
        var quizQuery = interrogation[quizIndex].queryTitle;
        var quizChoice = interrogation[quizIndex].choice;
        quizQueries.textContent = quizQuery; 
    };

    quizChoice.forEach(function (quizItem) {
        var quizList = document.createElement('li');
        quizList.textContent = quizItem;
        quizQueries.appendChild(quizUlElement);
        quizUlElement.appendChild(quizList);
        quizList.addEventListener('click', (quizCompare));
    })
};

//Function that compares choices with the correct answer.
function quizCompare(event) {
    var quizElement = event.target;

    if (quizElement.matches('li')){
        var quizDivCreate = document.createElement('div');
        quizDivCreate.setAttribute('id', 'quizDiv'); //add this selector to the css file.
        
        if(quizElement.textContent == interrogation[quizIndex].ans) {
            quizScore++;
            quizDivCreate.textContent = "Good Job! " + interrogation[quizIndex].ans;
        } else {
            secondsRemain = secondsRemain - quizPenalty;
            quizDivCreate.textContent = "Oops! The correct choice is " + interrogation[quizIndex].ans;
        };
    };

    //Increments the index value by one.
    quizIndex++;

    //Completed quiz, display score and time remaining.     
    if (quizIndex >= interrogation.length) {
        quizComplete();
        var removeQuizDiv = document.querySelector('#quizDiv');
        removeQuizDiv.remove();
    } else {
        quizDisplay(quizIndex);
    };
    quizQueries.appendChild(quizDivCreate);
};

//Clears the quiz query content and replaces the clock with a message when quiz has ended.
function quizComplete () {
    quizQueries.innerHTML = '';
    quizClock.innerHTML = 'Quiz has Ended!';

    var quizH1Element = document.createElement('h1');
    quizH1Element.setAttribute('class', 'results') //define an id value here
    quizH1Element.textContent = 'Quiz Results';
    quizQueries.appendChild(quizH1Element);

    //Variables to store user initials input.
    if (secondsRemain >=0) {
        var secondsLeftOver = secondsRemain;
        var quizP2Element = document.createElement('p');
        quizP2Element.setAttribute('class', 'results');
        clearInterval(quizTimeInterval);
        quizP2Element.textContent = 'Time remaining: ' + secondsLeftOver;
        
        quizQueries.appendChild(quizP2Element);

        var scoreDivCreate = document.createElement('div');
        scoreDivCreate.setAttribute('class', 'results'); 
        scoreDivCreate.textContent = "Quiz Score: " + quizScore + ' | ' + interrogation.length;
        quizQueries.appendChild(scoreDivCreate); 
    };

    //label for quiz taker initials form field
    var quizLabel = document.createElement('label')
    quizLabel.setAttribute('class', "results");
    quizLabel.textContent = 'Your initials: ';

    quizQueries.appendChild(quizLabel);

    //quiz taker initials input
    var initialsInput = document.createElement('input');
    initialsInput.setAttribute('type', 'text');
    initialsInput.setAttribute('id', 'initialsField');
    initialsInput.textContent = '';

    quizQueries.appendChild(initialsInput);

    //quiz taker initials submit button
    var InitialsSubmit = document.createElement('button');
    InitialsSubmit.setAttribute('type', 'submit');
    // InitialsSubmit.setAttribute('id', '');
    InitialsSubmit.textContent = 'Save';

    quizQueries.appendChild(InitialsSubmit);

    //Restart quiz
    var quizResetButton = document.createElement('button');
    quizResetButton.textContent = 'Reset Quiz';

    quizRestart.appendChild(quizResetButton);

    //Add event listener for reset button.
    quizResetButton.addEventListener('click', function(){
        window.location = "./index.html";
    });

        //Event listener for user initials input and storage of input
        InitialsSubmit.addEventListener('click', function(){
        var yourInitials = initialsInput.value;

        if (yourInitials === null) {
            console.log('Error! No initials entered');
        } else { 
            var quizFinalScore = {
                initials: yourInitials,
                score: secondsRemain, 
            };
            console.log(quizFinalScore);
            console.log(secondsRemain);
            console.log(yourInitials);

            var historicalScores = localStorage.getItem('historicalScores');
            if (historicalScores === null) {
                historicalScores = [];
            } else {
                historicalScores = JSON.parse(historicalScores);
            };
            
            //Combine new user score with previous user scores
            historicalScores.push(quizFinalScore);

            var newHistoricalScores = JSON.stringify(historicalScores);
            localStorage.setItem('historicalScores', newHistoricalScores);
      
            if (historicalScores !== null) {
                var highScoreTitle = document.createElement('h1');
                    highScoreTitle.textContent = 'High Scores';
                    quizScoreboard.appendChild(highScoreTitle);

                for (var i = 0; i < historicalScores.length; i++) {
                    var quizScoreList = document.createElement('li');
                    quizScoreList.textContent = historicalScores[i].initials + " | " + historicalScores[i].score;
                    quizScores.appendChild(quizScoreList);
                };
            }; 
        };
    });

};


//Acceptance Criteria
//
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score