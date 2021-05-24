var mainContent = document.querySelector('#content');
var questions = document.querySelector('#questions');
var title = document.querySelector('#big-words');
var answers = document.querySelector('#answers');
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#time');
var rightWrong = document.querySelector('#feedback');

var feedbackC = function() {
    rightWrong.textContent = "Correct!"
};
var feedbackI = function() {
    rightWrong.textContent = "Incorrect!"
};

/*document.getElementById('start').onclick = function() {
    title.textContent = '';
    questions.textContent = '';
    answers.innerHTML = '';  
};*/

document.getElementById('start').onclick = function() {
    questions.textContent = '';
    title.textContent = "Commonly used data types DO NOT include:"
    answers.innerHTML = "<button id='incorrect1' class='choice'>Strings</button>" + "<br>" 
    + "<button id='incorrect1' class='choice'>Booleans</button>" + "<br>" + "<button id='correct1' class='choice'>Alerts</button>" + "<br>"
    + "<button id='incorrect1' class='choice'>Numbers</button>" + "<br>";
    
    var correctA1 = document.querySelector('#correct1');
    var incorrectA1 = document.querySelector('#incorrect1');
    console.log(correctA1);
    
    document.getElementById('correct1').onclick = function() {
        rightWrong.textContent = "Correct!"
        title.textContent = "The condition in an if/else statement is enclosed with ______."
        answers.innerHTML = "<button id='incorrect2' class='choice'>Quotes</button>" + "<br>" 
        + "<button id='incorrect2' class='choice'>Curly Brackets</button>" + "<br>" + "<button id='correct2' class='choice'>Parentheses</button>" + "<br>"
        + "<button id='incorrect2' class='choice'>Square Brackets</button>" + "<br>";
        
        var correctA = document.querySelector('#correct2');
        var incorrectA = document.querySelector('#incorrect2');
        console.log(correctA);

        document.getElementById('correct2').onclick = function() {
            title.textContent = "Arrays in JavaScript can be used to store ______."
            answers.innerHTML = "<button id='incorrect3' class='choice'>Numbers and Strings</button>" + "<br>" 
            + "<button id='incorrect3' class='choice'>Other Arrays</button>" + "<br>" + "<button id='incorrect3' class='choice'>Booleans</button>" + "<br>"
            + "<button id='correct3' class='choice'>All of the Above</button>" + "<br>";
            
            var correctA = document.querySelector('#correct3');
            var incorrectA = document.querySelector('#incorrect3');
            console.log(correctA);

            document.getElementById('correct3').onclick = function() {
                title.textContent = "String values must be enclosed in ______ when being assigned to variables."
                answers.innerHTML = "<button id='correct4' class='choice'>Quotes</button>" + "<br>" 
                + "<button id='incorrect4' class='choice'>Curly Brackets</button>" + "<br>" + "<button id='incorrect4' class='choice'>Commas</button>" + "<br>"
                + "<button id='incorrect4' class='choice'>Parentheses</button>" + "<br>";
                
                var correctA = document.querySelector('#correct4');
                var incorrectA = document.querySelector('#incorrect4');
                console.log(correctA);

                document.getElementById('correct4').onclick = function() {
                    title.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
                    answers.innerHTML = "<button id='incorrect3' class='choice'>JavaScript</button>" + "<br>" 
                    + "<button id='correct3' class='choice'>Console Log</button>" + "<br>" + "<button id='incorrect3' class='choice'>Terminal/Bash</button>" + "<br>"
                    + "<button id='correct3' class='choice'>For Loops</button>" + "<br>";
                    
                    var correctA = document.querySelector('#correct4');
                    var incorrectA = document.querySelector('#incorrect4');
                    console.log(correctA);
                };
            };
        };
    };
};

var countdown = function() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval)
            // CLOSE GAME AND GO TO ENTER SCORE
        }
    }, 1000);
};

startBtn.addEventListener("click", countdown);