//Pseudo code
//Array with questions.
var interrogation = [
    {
        query: 'Which statement is true about while loops?',
        choice: ['while loops will run at least once, then will run again if their condition is true.',
                 'while loops evaluate a condition for however long it is true and the looping stops when the condition is false.',
                 'while loops always loop over a code block a known amount of times.',
                 'while loops only run while the condition is false.'],
        ans: 'while loops evaluate a condition for however long it is true and the looping stops when the condition is false.'         
    },
    {
        query: 'What is the general purpose of a loop?',
        choice: ['Loops iterate through arrays to find elements.',
                 'Loops read and recreate code automatically.',
                 'All loops help the computer make decisions automatically.',
                 'Loops automatically iterate a block of code based on conditions.'],
        ans: 'Loops automatically iterate a block of code based on conditions.'
    },
    {
        query: 'You want to run a code block at least once, then loop as long as a condition rmains true. Which kind of loop would uou use?',
        choice: ['A nested for loop.',
                 'A do...while statement.',
                 'A for statement.',
                 'A while statement.'],
        ans: 'A do...while statement.'
    },
    {
        query: 'What do nested for loops do?',
        choice: ['Nested for loops run the same code twice.',
                 'Nested for loops allow us to double check our if...else statements.',
                 'Nested for loops allow us to run multiple for loops at once.',
                 'Nested for loops are bad because they run forever.'],
        ans: 'Nested for loops allow us to run multiple for loops at once.'
    },
    {
        query: 'Which statement is true about for loops?',
        choice: ['for loops always count from 0 upwards.',
                 'for loops are appropriate when looping a predetermined number of times.',
                 'for loops can never result in an infinite loop.',
                 'for loops always run an unknown number of times.'],
        ans: 'for loops are appropriate when looping a predetermined number of times.'
    },
];


//Starting variables. Score, Array Index. 


//Variables that target the DOM. 


//Variables for time left, time remaining, penalty. 


//Take quiz button starts timer. First event listener and function.


//Function that displays choices.


//Function that compares choices with the correct answer.


//Function that keeps track of which question the user is on.


//Completed quiz, display score and time remaining. 


//Variables to store user initials input.


//Event listener for user initials input and storage of input


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
//
