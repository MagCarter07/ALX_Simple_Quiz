// Function to check the selected answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Ensure an option was selected before evaluating
    if (!selectedOption) {
        feedback.textContent = "Please choose an answer before submitting.";
        return;
    }

    // Store the user's selected answer
    const userAnswer = selectedOption.value;

    // Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Event listener for the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
