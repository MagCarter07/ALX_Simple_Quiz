ALX Simple Quiz

This project is a basic interactive quiz application created as part of the ALX Web Development program. The goal is to implement JavaScript functionality that checks a user’s selected answer and displays feedback based on correctness.

Project Structure
File Description
index.html Contains the quiz structure and DOM elements
styles.css Styles the UI to enhance visual appearance
quiz.js Implements interactive functionality using JavaScript

All files must be placed in the same directory.

Features

Displays a multiple-choice question

Allows users to select an answer using radio buttons

Validates the submitted response

Provides instant feedback:

✔ Correct! Well done.

✖ That’s incorrect. Try again!

JavaScript Requirements

The task is to implement functionality to:

Check the selected answer

Compare it with the correct value

Display feedback dynamically

Use an event listener to trigger the check on button click

Key Implementation Details

Inside quiz.js:

function checkAnswer() {
const correctAnswer = "4";
const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) return;

    const userAnswer = selectedOption.value;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

How to Run

Clone the repository:

git clone https://github.com/<your-username>/ALX_Simple_Quiz.git

Open index.html in any browser

Select an answer and click Submit Answer

Repository

GitHub Repo Name: ALX_Simple_Quiz

Contains:

index.html
styles.css
quiz.js

Author

Part of an ALX learning task on JavaScript DOM manipulation and event handling
