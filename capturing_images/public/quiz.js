// const quizData = [{
//         question: "Which animal is this?",
//         image: "quiz_images/lion.jpg",
//         options: ["Lion", "Tiger", "Elephant", "Leopard"],
//         correct: 0
//     },
//     {
//         question: "Identify this fruit:",
//         image: "quiz_images/banana.jpg",
//         options: ["Apple", "Banana", "Grapes", "Orange"],
//         correct: 1
//     },
//     {
//         question: "What vegetable is this?",
//         image: "quiz_images/tomato.jpg",
//         options: ["Brinjal", "Tomato", "Potato", "Bitter gourd"],
//         correct: 1
//     },
//     {
//         question: "Which vehicle is this?",
//         image: "quiz_images/bus.jpg",
//         options: ["Car", "Bike", "Cycle", "Bus"],
//         correct: 3
//     },
//     {
//         question: "Which bird is this?",
//         image: "quiz_images/peacock.jpg",
//         options: ["Eagle", "Parrot", "Sparrow", "Peacock"],
//         correct: 3
//     },
//     {
//         question: "What is this?",
//         image: "quiz_images/pen.jpg",
//         options: ["Pen", "Eraser", "Scale", "Compass"],
//         correct: 0
//     },
//     {
//         question: "What Shape is this?",
//         image: "quiz_images/triangle.jpg",
//         options: ["Circle", "Square", "Triangle", "Rectangle"],
//         correct: 2
//     },
//     {
//         question: "What color is this?",
//         image: "quiz_images/orange.jpg",
//         options: ["Blue", "Orange", "Brown", "Pink"],
//         correct: 1
//     },
//     {
//         question: "What animal is this?",
//         image: "quiz_images/dog.jpg",
//         options: ["Dog", "Cat", "Cow", "Goat"],
//         correct: 0
//     },
//     {
//         question: "Which sea creature is this?",
//         image: "quiz_images/fish.jpg",
//         options: ["Fish", "Octopus", "Jellyfish", "Seahorse"],
//         correct: 0
//     }
// ];


// let selectedQuestions = [];
// let currentQuestion = 0;
// let correctAnswers = 0;
// let timeLeft = 90; // 1 minute 30 seconds for each question
// let timerInterval;

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// function startQuiz() {
//     shuffle(quizData); // Shuffle questions
//     selectedQuestions = quizData.slice(0, 3); // Select only the first 3 questions
//     showQuestion();
//     startTimer();
// }

// function showQuestion() {
//     const questionData = selectedQuestions[currentQuestion];
//     document.getElementById("question-container").innerHTML = `
//       <h4>${questionData.question}</h4>
//       <img id="question-image" src="${questionData.image}" class="img-fluid mb-3" alt="Question Image">
//     `;

//     const optionsContainer = document.getElementById("options");
//     optionsContainer.innerHTML = ""; // Clear old options
//     questionData.options.forEach((option, index) => {
//         const btn = document.createElement("button");
//         btn.classList.add("btn", "btn-outline-primary", "mb-2"); // Use btn-default for default styling
//         btn.textContent = option;
//         btn.onclick = () => selectAnswer(index);
//         optionsContainer.appendChild(btn);
//     });
// }

// function selectAnswer(selectedIndex) {
//     const questionData = selectedQuestions[currentQuestion];
//     const optionsContainer = document.getElementById("options");
//     const buttons = Array.from(optionsContainer.children);
//     const correctIndex = questionData.correct;

//     // Check if the selected answer is correct and increment the score
//     if (selectedIndex === correctIndex) {
//         correctAnswers++;
//     }

//     // Apply styles and disable buttons
//     buttons.forEach((button, index) => {
//         button.disabled = true;
//         if (index === selectedIndex) {
//             button.style.backgroundColor = index === correctIndex ? 'lightgreen' : 'lightcoral';
//         } else if (index === correctIndex) {
//             button.style.backgroundColor = 'lightgreen';
//         } else {
//             button.style.backgroundColor = ''; // Default button style
//         }
//     });

//     // Move to the next question after a short delay
//     setTimeout(() => {
//         currentQuestion++;
//         if (currentQuestion < selectedQuestions.length) {
//             resetTimer();
//             showQuestion();
//         } else {
//             endQuiz();
//         }
//     }, 1000); // 1-second delay
// }


// function startTimer() {
//     timerInterval = setInterval(() => {
//         timeLeft--;
//         document.getElementById("time").textContent = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             selectAnswer(-1); // Automatically move to the next question on timeout
//         }
//     }, 1000);
// }

// function resetTimer() {
//     timeLeft = 90; // Reset to 1 minute 30 seconds for each new question
// }

// function endQuiz() {
//     clearInterval(timerInterval);
//     const totalQuestions = selectedQuestions.length;
//     const scorePercent = (correctAnswers / totalQuestions) * 100;

//     let resultMessage = `Quiz Over! You got ${correctAnswers} out of ${totalQuestions} correct.`;

//     document.getElementById("question-container").innerHTML = `<h4>${resultMessage}</h4>`;
//     document.getElementById("options").innerHTML = "";
// }

// window.onload = startQuiz;
// const questions = [{
//         question: "Which word rhymes with 'cat'?",
//         answers: ["Hat", "Dog", "Mouse", "Fish"],
//         correct: 0,
//         quote: "Believe in yourself and all that you are.",
//     },
//     {
//         question: "What is the opposite of 'hot'?",
//         answers: ["Cold", "Warm", "Sunny", "Bright"],
//         correct: 0,
//         quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
//     },
//     {
//         question: "Which of these is a fruit?",
//         answers: ["Carrot", "Apple", "Bread", "Chicken"],
//         correct: 1,
//         quote: "Every day may not be good, but there’s something good in every day.",
//     },
//     {
//         question: "What color do you get when you mix red and white?",
//         answers: ["Pink", "Orange", "Purple", "Brown"],
//         correct: 0,
//         quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
//     },
//     {
//         question: "Which one of these is a vehicle?",
//         answers: ["Airplane", "Tree", "Rock", "Sun"],
//         correct: 0,
//         quote: "You are capable of amazing things.",
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// let timer;
// let timeLeft = 90;

// function startTimer() {
//     timeLeft = 90;
//     document.getElementById('timer').innerText = `Time Left: ${timeLeft} seconds`;
//     timer = setInterval(() => {
//         timeLeft--;
//         document.getElementById('timer').innerText = `Time Left: ${timeLeft} seconds`;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             showResults();
//         }
//     }, 1000);
// }

// function showQuestion() {
//     clearInterval(timer);
//     startTimer();
//     const currentQuestion = questions[currentQuestionIndex];
//     document.getElementById('question').innerText = currentQuestion.question;
//     const answersDiv = document.querySelector('.answer-buttons');
//     answersDiv.innerHTML = ''; // Clear previous answers
//     currentQuestion.answers.forEach((answer, index) => {
//         const button = document.createElement('button');
//         button.innerText = answer;
//         button.onclick = () => selectAnswer(index);
//         answersDiv.appendChild(button);
//     });
//     document.getElementById('quote').style.display = 'none';
// }

// function selectAnswer(index) {
//     clearInterval(timer);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (index === currentQuestion.correct) {
//         score++; // Increment score for correct answer
//     }
//     const quoteDiv = document.getElementById('quote');
//     quoteDiv.innerText = currentQuestion.quote;
//     quoteDiv.style.display = 'block';

//     // Disable buttons after selection
//     const buttons = document.querySelectorAll('.answer-buttons button');
//     buttons.forEach(button => button.disabled = true);

//     // Move to the next question after a short delay
//     setTimeout(() => {
//         currentQuestionIndex++;
//         if (currentQuestionIndex < questions.length) {
//             showQuestion();
//         } else {
//             showResults();
//         }
//     }, 1500); // 1.5 seconds delay before moving to the next question
// }

// function showResults() {
//     document.getElementById('question').style.display = 'none';
//     document.querySelector('.answer-buttons').style.display = 'none';
//     document.getElementById('quote').style.display = 'none';
//     document.getElementById('timer').style.display = 'none';
//     document.getElementById('result').innerText = `Congratulations! You've completed the quiz! Your score is ${score} out of ${questions.length}.`;
//     document.getElementById('result').style.display = 'block';
//     createSparkles();
// }

// function createSparkles() {
//     const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD', '#3375FF', '#5733FF'];
//     for (let i = 0; i < 30; i++) {
//         const sparkle = document.createElement('div');
//         sparkle.className = 'sparkle';
//         sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         sparkle.style.left = Math.random() * 100 + 'vw';
//         sparkle.style.bottom = Math.random() * 100 + 'vh';
//         document.querySelector('.sparkle-container').appendChild(sparkle);
//         setTimeout(() => {
//             sparkle.remove();
//         }, 500);
//     }
// }

// // Start the quiz
// showQuestion();


const questions = [{
        question: "Which word rhymes with 'cat'?",
        answers: ["Hat", "Dog", "Mouse", "Fish"],
        correct: 0,
        quote: "Believe in yourself and all that you are.",
    },
    {
        question: "What is the opposite of 'hot'?",
        answers: ["Cold", "Warm", "Sunny", "Bright"],
        correct: 0,
        quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    },
    {
        question: "Which of these is a fruit?",
        answers: ["Carrot", "Apple", "Bread", "Chicken"],
        correct: 1,
        quote: "Every day may not be good, but there’s something good in every day.",
    },
    {
        question: "Which animal is this?",
        image: "quiz_images/lion.jpg",
        options: ["Lion", "Tiger", "Elephant", "Leopard"],
        correct: 0,
        quote: "Courage doesn't always roar. Sometimes it's the quiet voice that says 'I will try again tomorrow.'",
    },
    {
        question: "Identify this fruit:",
        image: "quiz_images/banana.jpg",
        options: ["Apple", "Banana", "Grapes", "Orange"],
        correct: 1,
        quote: "The only way to do great work is to love what you do.",
    },
    {
        question: "What vegetable is this?",
        image: "quiz_images/tomato.jpg",
        options: ["Brinjal", "Tomato", "Potato", "Bitter gourd"],
        correct: 1,
        quote: "Start where you are. Use what you have. Do what you can.",
    },
    {
        question: "Which vehicle is this?",
        image: "quiz_images/bus.jpg",
        options: ["Car", "Bike", "Cycle", "Bus"],
        correct: 3,
        quote: "It does not matter how slowly you go as long as you do not stop.",
    },
    {
        question: "Which bird is this?",
        image: "quiz_images/peacock.jpg",
        options: ["Eagle", "Parrot", "Sparrow", "Peacock"],
        correct: 3,
        quote: "Don't wait for the right opportunity. Create it.",
    },
    {
        question: "What is this?",
        image: "quiz_images/pen.jpg",
        options: ["Pen", "Eraser", "Scale", "Compass"],
        correct: 0,
        quote: "The expert in anything was once a beginner.",
    },
    {
        question: "What Shape is this?",
        image: "quiz_images/triangle.jpg",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correct: 2,
        quote: "Success is the sum of small efforts repeated day in and day out.",
    },
    {
        question: "What color is this?",
        image: "quiz_images/orange.jpg",
        options: ["Blue", "Orange", "Brown", "Pink"],
        correct: 1,
        quote: "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
        question: "What animal is this?",
        image: "quiz_images/dog.jpg",
        options: ["Dog", "Cat", "Cow", "Goat"],
        correct: 0,
        quote: "Happiness is a warm puppy.",
    },
    {
        question: "Which sea creature is this?",
        image: "quiz_images/fish.jpg",
        options: ["Fish", "Octopus", "Jellyfish", "Seahorse"],
        correct: 0,
        quote: "Just keep swimming.",
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 90;

// Randomize and select 5 questions from the array
let selectedQuestions = [];

function randomizeQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 5);
}

function startTimer() {
    timeLeft = 90; // Reset the timer to 90 seconds for each question
    document.getElementById('timer').innerText = `${timeLeft} `; // Display time left
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `${timeLeft} `; // Update the timer display
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            handleTimeout(); // Handle what happens when time runs out
        }
    }, 1000);
}

// Function to handle timeout and move to the next question
function handleTimeout() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    // Display a message or quote indicating timeout (optional)
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerText = "Time's up! Moving to the next question.";
    quoteDiv.style.display = 'block';

    // Disable buttons after timeout
    const buttons = document.querySelectorAll('.answer-buttons button');
    buttons.forEach(button => button.disabled = true);

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500); // 1.5 seconds delay before moving to the next question
}

function showQuestion() {
    clearInterval(timer); // Clear any existing timer
    startTimer(); // Start a new timer for the next question
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;

    const answersDiv = document.querySelector('.answer-buttons');
    answersDiv.innerHTML = ''; // Clear previous answers

    // Handle questions with images or without images
    if (currentQuestion.image) {
        const image = document.createElement('img');
        image.src = currentQuestion.image;
        image.alt = "quiz image";
        document.getElementById('question').appendChild(image);
    }

    // Use `answers` or `options` depending on the question type
    const choices = currentQuestion.answers || currentQuestion.options;

    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => selectAnswer(index);
        answersDiv.appendChild(button);
    });

    document.getElementById('quote').style.display = 'none'; // Hide any previous quote
}

function selectAnswer(index) {
    clearInterval(timer); // Clear the timer on answer selection
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (index === currentQuestion.correct) {
        score++; // Increment score for correct answer
    }
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerText = currentQuestion.quote || '';
    quoteDiv.style.display = currentQuestion.quote ? 'block' : 'none';

    // Disable buttons after selection
    const buttons = document.querySelectorAll('.answer-buttons button');
    buttons.forEach(button => button.disabled = true);

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500); // 1.5 seconds delay before moving to the next question
}

function showResults() {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.answer-buttons').style.display = 'none';
    document.getElementById('quote').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('result').innerText = `Congratulations! You've completed the quiz! Your score is ${score} out of ${selectedQuestions.length}.`;
    document.getElementById('result').style.display = 'block';
    createSparkles();
}

function createSparkles() {
    const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD', '#3375FF', '#5733FF'];
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.bottom = Math.random() * 100 + 'vh';
        document.querySelector('.sparkle-container').appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 500);
    }
}

// Initialize quiz with random 5 questions
randomizeQuestions();
showQuestion();