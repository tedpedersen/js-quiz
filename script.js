//refs to objects
var qIntro = document.getElementById("qIntro");
var qQuestionsContainer = document.getElementById("qQuestionsContainer");
var qTimeContainer = document.getElementById("qTimeContainer");

//start the quiz 
document.getElementById("qStart").addEventListener("click", function startQuiz(){
    //hide the intro
    qIntro.classList.add("hide");
    //show the questons and timer
    qQuestionsContainer.classList.remove("hide");
    qTimeContainer.classList.remove("hide");
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