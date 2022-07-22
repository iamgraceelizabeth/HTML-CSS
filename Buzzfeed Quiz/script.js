//VARIABLES

//outcome vars
var wolfScore = 0;
var monkeyScore = 0;
var catScore = 0;
var bunnyScore = 0;

//other vars
var questionCount = 0;
var result = document.getElementById("result");
var buttons1 = document.getElementById("buttons1");

//button vars
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var reset = document.getElementById("reset");

//FUNCTIONS
function resetNow() {
  wolfScore = 0;
  monkeyScore = 0;
  catScore = 0;
  bunnyScore = 0;
  questionCount = 0;
  result.innerHTML = "Your result is ...";
  console.log("reset");
}

function updateResult() {
  if (wolfScore >= 2) {
    console.log("You are a wolf!");
    result.innerHTML = "You are a wolf!";
  }
  else if (catScore >= 2) {
    console.log("You are a cat!");
    result.innerHTML = "You are a cat!";
  }
  else if (monkeyScore >= 2) {
    console.log("You are a monkey");
    result.innerHTML = "You are a monkey!";
  }
  else if (bunnyScore >= 2) {
    console.log("You are a bunny!");
    result.innerHTML = "You are a bunny!";
  }
}

function bunny() {
  bunnyScore += 1;
  questionCount += 1
  console.log("questionCount =" + questionCount + "bunnyScore =" + bunnyScore);

  //test question count
  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function monkey() {
  monkeyScore += 1;
  questionCount += 1;
  console.log("questionCount =" + questionCount + "monkeyScore =" + monkeyScore);
  
  //test question count
  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function wolf() {
  wolfScore += 1;
  questionCount += 1;
  console.log("questionCount =" + questionCount + "wolfScore =" + wolfScore);
  
  //test question count
  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function cat() {
  catScore += 1;
  questionCount += 1;
  console.log("questionCount =" + questionCount + "catScore =" + catScore);
  
  //test question count
  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

//add button interactions
q1a1.addEventListener('click', bunny);
q1a2.addEventListener('click', monkey);
q1a3.addEventListener('click', wolf);
q1a4.addEventListener('click', cat);

q2a1.addEventListener('click', wolf);
q2a2.addEventListener('click', bunny);
q2a3.addEventListener('click', cat);
q2a4.addEventListener('click', monkey);

q3a1.addEventListener('click', bunny);
q3a2.addEventListener('click', wolf);
q3a3.addEventListener('click', monkey);
q3a4.addEventListener('click', cat);

q4a1.addEventListener('click', cat);
q4a2.addEventListener('click', wolf);
q4a3.addEventListener('click', monkey);
q4a4.addEventListener('click', bunny);

q5a1.addEventListener('click', monkey);
q5a2.addEventListener('click', cat);
q5a3.addEventListener('click', bunny);
q5a4.addEventListener('click', wolf);

reset.addEventListener('click', resetNow);


