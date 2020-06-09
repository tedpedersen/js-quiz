//refs to objects
var qIntro = document.getElementById("qIntro");
var qQuestionsContainer = document.getElementById("qQuestionsContainer");
var qTimeContainer = document.getElementById("qTimeContainer");
var quizQustionsContainer = document.getElementById("qQuestionsContainer");

//start the quiz 
document.getElementById("qStart").addEventListener("click", function startQuiz(){
    //hide the intro
    qIntro.classList.add("hide");
    //show the questons and timer
    qTimeContainer.classList.remove("hide");
    buildQuiz();
});

//timer for quiz
var timeleft = 100;
var quizTimer = setInterval(function(){
  //if the timer runs out, the user is alerted and the quiz reloads  
  if(timeleft <= 0){
    clearInterval(quizTimer);
    document.getElementById("qTime").innerHTML = "Finished";
    alert("You ran out of time! Please try again.");
    window.location.reload();
  } else {
    document.getElementById("qTime").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

//quiz questions
var qQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    qQuestions.forEach(
        (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

            // ...add an HTML radio button
            answers.push(
            `<button type="button" class="btn btn-primary answer-button" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </button>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<h1 class="question"> ${currentQuestion.question} </h1>
            <div class="btn-group-vertical"> ${answers.join('')} </div>`
        );
    }
);


// finally combine our output list into one string of HTML and put it on the page
quizQustionsContainer.innerHTML = output.join('');
}