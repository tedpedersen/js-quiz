//refs to objects
var qIntro = document.getElementById("qIntro");
var qQuestionsContainer = document.getElementById("qQuestionsContainer");
var qTimeContainer = document.getElementById("qTimeContainer");
var quizQustionsContainer = document.getElementById("qQuestionsContainer");
var quizAnswersContainer = document.getElementById("qAnswersContainer");
var qResultContainer = document.getElementById("qResult");
var qContainer = document.getElementById("qContainer");
var formContainer = document.getElementById("formContainer");
var scoreContainer = document.getElementById("scoreContainer");
var retakeBut = document.getElementById("qRetake");
var timeleft = 100;
var quizFinished = 0;
//start the quiz 
document.getElementById("qStart").addEventListener("click", function startQuiz(){
    //hide the intro
    qIntro.classList.add("hide");
    //show the questions and timer
    qTimeContainer.classList.remove("hide");
    buildQuestion1();
    //timer for quiz
var quizTimer = setInterval(function(){
  //if the timer runs out, the user is alerted and the quiz reloads  
  if(timeleft <= 0){
    clearInterval(quizTimer);
    document.getElementById("qTime").innerHTML = "Finished";
    alert("You ran out of time! Please try again.");
    window.location.reload();
  } else if(quizFinished == 1){
    clearInterval(quizTimer);
    // alert("done");
  }
   else {
    document.getElementById("qTime").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
});

//set up users score
var userScore = 0;

//quiz questions
questionObj = {
    "question1": { 
        question: "Commonly used data types do NOT include:",
        answers: {
          a: "strings",
          b: "booleans",
          c: "alerts",
          d: "numbers"
        }
      },
      "question2": { 
        question: "The condition of a if / else statement is enclosed with:",
        answers: {
          a: "quotes",
          b: "curly brackets",
          c: "parentesis",
          d: "square brackets"
        }
      },
      "question3": { 
        question: "String values must be enlosed within ......... when being assigned to variables.",
        answers: {
          a: "commas",
          b: "curly brackets",
          c: "quotes",
          d: "parentesis"
        }
      },
      "question4": { 
        question: "A very useful tool used development and debugging for printing content to the debugger is:",
        answers: {
            a: "Javascript",
            b: "terminal/bash",
            c: "for loops",
            d: "console.log"
        }
      }
   }

//refs to questions
var qQuestion1 = questionObj.question1.question;
var qQuestion2 = questionObj.question2.question;
var qQuestion3 = questionObj.question3.question;
var qQuestion4 = questionObj.question4.question;

var answer1 = questionObj.question1.answers.a;
var answer2 = questionObj.question1.answers.b;
var answer3 = questionObj.question1.answers.c;
var answer4 = questionObj.question1.answers.d;
var answer5 = questionObj.question2.answers.a;
var answer6 = questionObj.question2.answers.b;
var answer7 = questionObj.question2.answers.c;
var answer8 = questionObj.question2.answers.d;
var answer9 = questionObj.question3.answers.a;
var answer10 = questionObj.question3.answers.b;
var answer11 = questionObj.question3.answers.c;
var answer12 = questionObj.question3.answers.d;
var answer13 = questionObj.question4.answers.a;
var answer14 = questionObj.question4.answers.b;
var answer15 = questionObj.question4.answers.c;
var answer16 = questionObj.question4.answers.d;

// create questions
var q1 = document.createElement("h1");
q1.textContent = qQuestion1;
var q2 = document.createElement("h1");
q2.textContent = qQuestion2;
var q3 = document.createElement("h1");
q3.textContent = qQuestion3;
var q4 = document.createElement("h1");
q4.textContent = qQuestion4;

//create answers
var btnClass = "btn btn-primary answer-button";
var a1 = document.createElement("button");
a1.textContent = answer1;
a1.className = btnClass;
a1.setAttribute("value", "wrong");
var a2 = document.createElement("button");
a2.textContent = answer2;
a2.className = btnClass;
a2.setAttribute("value", "wrong");
var a3 = document.createElement("button");
a3.textContent = answer3;
a3.className = btnClass;
a3.setAttribute("value", "correct");
var a4 = document.createElement("button");
a4.textContent = answer4;
a4.className = btnClass;
a4.setAttribute("value", "wrong");
var a5 = document.createElement("button");
a5.textContent = answer5;
a5.className = btnClass;
a5.setAttribute("value", "wrong");
var a6 = document.createElement("button");
a6.textContent = answer6;
a6.className = btnClass;
a6.setAttribute("value", "wrong");
var a7 = document.createElement("button");
a7.textContent = answer7;
a7.className = btnClass;
a7.setAttribute("value", "correct");
var a8 = document.createElement("button");
a8.textContent = answer8;
a8.className = btnClass;
a8.setAttribute("value", "wrong");
var a9 = document.createElement("button");
a9.textContent = answer9;
a9.className = btnClass;
a9.setAttribute("value", "wrong");
var a10 = document.createElement("button");
a10.textContent = answer10;
a10.className = btnClass;
a10.setAttribute("value", "wrong");
var a11 = document.createElement("button");
a11.textContent = answer11;
a11.className = btnClass;
a11.setAttribute("value", "correct");
var a12 = document.createElement("button");
a12.textContent = answer12;
a12.className = btnClass;
a12.setAttribute("value", "wrong");
var a13 = document.createElement("button");
a13.textContent = answer13;
a13.className = btnClass;
a13.setAttribute("value", "wrong");
var a14 = document.createElement("button");
a14.textContent = answer14;
a14.className = btnClass;
a14.setAttribute("value", "wrong");
var a15 = document.createElement("button");
a15.textContent = answer15;
a15.className = btnClass;
a15.setAttribute("value", "wrong");
var a16 = document.createElement("button");
a16.textContent = answer16;
a16.className = btnClass;
a16.setAttribute("value", "correct");

//build the question and answers
function buildQuestion1(){
    quizQustionsContainer.appendChild(q1);
    quizAnswersContainer.appendChild(a1);
    quizAnswersContainer.appendChild(a2);
    quizAnswersContainer.appendChild(a3);
    quizAnswersContainer.appendChild(a4);
    getAnswer1();
}

function getAnswer1() { qContainer.addEventListener('click', (event) => {
    if (event.target.matches(".answer-button")) {
        var myValue = event.target.getAttribute("value");
        // console.log(myValue);
        //check if answer is correct
        if (myValue === "correct"){
            qResultContainer.textContent = "CORRECT";
            //give them points
            userScore = userScore + 25;
            // console.log(userScore);
            setTimeout(() => { buildQuestion2(); }, 500);
        }
        else{
            qResultContainer.textContent = "WRONG";
            // console.log(userScore);
            //reduce timer if wrong
            timeleft = timeleft - 10;
            //wait 2 secs until next questions
            setTimeout(() => {  buildQuestion2(); }, 500);

        }
      }
  })
}
//clear the finished question
function clearQuestion(){
    quizQustionsContainer.innerHTML = '';
    quizAnswersContainer.innerHTML = '';
    qResultContainer.innerHTML = '';
}
function buildQuestion2(){
    clearQuestion();
    quizQustionsContainer.append(q2);
    quizAnswersContainer.append(a5);
    quizAnswersContainer.append(a6);
    quizAnswersContainer.append(a7);
    quizAnswersContainer.append(a8);
    getAnswer2();
}
function getAnswer2() { qContainer.addEventListener('click', (event) => {
    if (event.target.matches(".answer-button")) {
        var myValue = event.target.getAttribute("value");
        if (myValue === "correct"){
            qResultContainer.textContent = "CORRECT";
            scoreCorrect();
            setTimeout(() => { buildQuestion3(); }, 500);
        }
        else{
            qResultContainer.textContent = "WRONG";
            scoreWrong();
            setTimeout(() => {  buildQuestion3(); }, 500);

        }
      }
  })
}

function buildQuestion3(){
    clearQuestion();
    quizQustionsContainer.append(q3);
    quizAnswersContainer.appendChild(a9);
    quizAnswersContainer.appendChild(a10);
    quizAnswersContainer.appendChild(a11);
    quizAnswersContainer.appendChild(a12);
    getAnswer3();
}

function getAnswer3() { qContainer.addEventListener('click', (event) => {
    if (event.target.matches(".answer-button")) {
        var myValue = event.target.getAttribute("value");
        if (myValue === "correct"){
            qResultContainer.textContent = "CORRECT";
            scoreCorrect();
            setTimeout(() => { buildQuestion4(); }, 500);
        }
        else{
            qResultContainer.textContent = "WRONG";
            scoreWrong();
            setTimeout(() => {  buildQuestion4(); }, 500);

        }
      }
  })
}

function buildQuestion4(){
    clearQuestion();
    quizQustionsContainer.append(q4);
    quizAnswersContainer.appendChild(a13);
    quizAnswersContainer.appendChild(a14);
    quizAnswersContainer.appendChild(a15);
    quizAnswersContainer.appendChild(a16);
    getAnswer4();
}


function getAnswer4() { qContainer.addEventListener('click', (event) => {
    if (event.target.matches(".answer-button")) {
        var myValue = event.target.getAttribute("value");
        if (myValue === "correct"){
            qResultContainer.textContent = "CORRECT";
            qTimeContainer.classList.add("hide");
            scoreCorrect();
            setTimeout(() => {  captureUser(); }, 500);
        }
        else{
            scoreWrong();
            setTimeout(() => {  captureUser(); }, 500);
        }
      }
  })
}
//logic for the scoring
function scoreCorrect() {
    userScore + 25;
    scoreContainer.textContent = userScore;
}
function scoreWrong() {
    timeleft - 10;
    scoreContainer.textContent = userScore;
}

function captureUser(){
    quizFinished = 1;
    clearQuestion();
    qTimeContainer.classList.add("hide");
    quizQustionsContainer.classList.add("hide");
    //show score and form
    formContainer.classList.remove("hidden");
}

document.getElementById("nameBut").addEventListener("click", function final(){
    //stop form submittion
    event.preventDefault();
    
    var name = document.getElementById("username").value;

    //validate
    if (name == 0){
        alert("Please enter your initails!")
        
    }else{
    //hide the form 
    formContainer.classList.add("hide");
    //button text
    retakeBut.textContent = "Retake Quiz"; 
    //todo this should be a loop, not hardcoded
    hiScoreContainer.classList.remove("hidden");
    var nameContainer = document.getElementById("nameContainer");
    var yourScore = document.getElementById("yourScore");
    nameContainer.textContent = name;
    yourScore.textContent = userScore;
    //save final score to local storage
    localStorage.setItem('user-name', name);
    localStorage.setItem('user-score', userScore);
    }
});
//retake the quiz
document.getElementById("qRetake").addEventListener("click", function reTakeit(){
    window.location.reload();
});
//if local storage, show the high scores and have button say go back
document.getElementById("qHighScore").addEventListener("click", function qHighScoreLink(){
    if("user-name" in localStorage){
        retakeBut.textContent = "Go Back"; 
        hiScoreContainer.classList.remove("hidden");
        qIntro.classList.add("hide");
        formContainer.classList.add("hide");
        var nameContainer = document.getElementById("nameContainer");
        var yourScore = document.getElementById("yourScore");
        nameContainer.textContent = localStorage.getItem("user-name");
        yourScore.textContent = localStorage.getItem("user-score");
     } else {
        alert("There are no scores yet, please take the quiz to be the first!");
     }
});