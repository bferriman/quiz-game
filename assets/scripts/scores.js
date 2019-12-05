var scoresEl = document.querySelector("#scores");

var scoresStr = localStorage.getItem("scores");

if(scoresStr !== null) {
    var scoresArr = JSON.parse(scoresStr);

    for(var i = 0; i < scoresArr.length; i++) {
        var divEl = document.createElement("div");
        divEl.textContent = scoresArr[i].initials + " | " + scoresArr[i].score;
        scoresEl.appendChild(divEl);
    }
}
else {
    var divEl = document.createElement("div");
    divEl.textContent = "There are no recorded scores";
    scoresEl.appendChild(divEl);
}