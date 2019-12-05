var topicSelectEl = document.querySelector("#topicSelectSection");
var quizEl = document.querySelector("#quizSection");
var highScoreEl = document.querySelector("#highScore");
var topicEl = document.querySelector("#topics");
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerDivEl = document.querySelector("#answers");


var topics = [coding, geography];

topicEl.innerHTML = "";  //clear the topics element

for (var i = 0; i < topics.length; i++) {  //populate topics element with contents of topics array
    var topicName = topics[i].name;

    var divEl = document.createElement("div");
    divEl.setAttribute("class", "form-check");
    var inputEl = document.createElement("input");
    inputEl.setAttribute("class", "form-check-input");
    inputEl.setAttribute("type", "checkbox");
    inputEl.setAttribute("id", topicName);
    var labelEl = document.createElement("label");
    labelEl.setAttribute("class", "form-check-label mr-4");
    labelEl.setAttribute("for", topicName);
    labelEl.textContent = topicName;
    divEl.appendChild(inputEl);
    divEl.appendChild(labelEl);
    topicEl.appendChild(divEl);
}

startEl.addEventListener("click", function(event) {  //listener for start button click
    event.preventDefault();

    var helpEl = document.querySelector("#topicsHelpBlock");
    helpEl.textContent = "";

    var selectedTopics = [];
    var formInput = document.querySelector("#topicSelectForm");
    
    for (var i = 0; i < formInput.length; i++) {  //build array of selected topics
        console.log("Iteration #" + (i+1));
        if (formInput[i].checked) {
            selectedTopics.push(topics[i]);
        }
    }

    if (selectedTopics.length === 0) {  //print error message to user
        console.log("Nothing was selected");
        helpEl.textContent = "Choose one or more topics";
    }

    else {  //call function to run quiz
        console.log("Let's run a quiz!");
        for (var i = 0; i < selectedTopics.length; i++) {
            console.log(selectedTopics[i].name);
        }
        var quiz = generateQuiz(selectedTopics);
        topicSelectEl.setAttribute("class", "container bg-white my-5 d-none");  //hide topic select section
        quizEl.setAttribute("class", "container bg-white my-5");  //show quiz section

        runQuiz(quiz, 0);
    }
});


function generateQuiz(selTopics) {

    //generate array of questions to be asked

    var quiz = [];  //this is our quiz - an array of question objects - starts empty

    var numTopics = selTopics.length;

    var topicCopies = [];  //want copies of the topic objects so that the originals are not altered by subsequent code

    for (var i = 0; i < numTopics; i++) {  //make the copies
        topicCopies[i] = JSON.parse(JSON.stringify(selTopics[i]));
    }    

    for (var i = 0; i < 10; i++) {  //make a quiz of 10 questions
        var tempTopic = topicCopies[i % numTopics];  //alternate taking questions from each selected topic
        var tempIndex = Math.floor(Math.random() * tempTopic.questions.length);
        quiz[i] = tempTopic.questions[tempIndex];
        tempTopic.questions.splice(tempIndex, 1);  //remove the question so it can't be randomly selected more than once
    }

    quiz.sort(function(a, b){return 0.5 - Math.random()});  //randomize order of questions

    //testing output to check results of quiz generation - can be removed later
    console.log("Now we have a quiz of " + quiz.length + " questions");
    for (var i = 0; i < quiz.length; i++) {
        console.log(quiz[i].title);
    }

    return quiz;

}

function runQuiz(quiz, index) {
    
    console.log("runQuiz function has been called");

    questionEl.textContent = quiz[index].title;

    answerDivEl.innerHTML = "";

    for (var i = 0; i < 4; i++) {  //create answer buttons with event listeners
        var div = document.createElement("div");
        div.setAttribute("class", "my-2");
        var button = document.createElement("button");
        button.textContent = quiz[index].choices[i];
        button.addEventListener("click", function(event) {
            event.preventDefault();

            runQuiz(quiz, index + 1);
        });
        div.appendChild(button);
        answerDivEl.appendChild(div);
    }

}

