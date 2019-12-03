var highScoreEl = document.querySelector("#highScore");
var topicEl = document.querySelector("#topics");
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerElA = document.querySelector("#answerA");
var answerElB = document.querySelector("#answerB");
var answerElC = document.querySelector("#answerC");
var answerElD = document.querySelector("#answerD");

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

startEl.addEventListener("click", function(event) {
    event.preventDefault();
});

