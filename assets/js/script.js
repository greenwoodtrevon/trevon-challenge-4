var mainContent = document.querySelector('#content');
var questions = document.querySelector('#questions');
var title = document.querySelector('#big-words');
var answers = document.querySelector('#answers');
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#time');


var makeQuestions = function(question, ans1, ans2, ans3, ans4) {
    questions.textContent = question;
    for (i = 0; i < 4; i++) {
        var choice = document.createElement("button");
        choice.className = ".choice"
    }
};

var startQuiz = function() {
    title.textContent = '';
    questions.textContent = '';
    answers.innerHTML = '';
    
    
}

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval)
            // CLOS GAME AND GO TO ENTER SCORE
        }
    }, 1000);
}

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);