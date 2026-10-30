var ball = document.getElementById("ball");
var circle = document.getElementById("circle");
var question = document.getElementById("question");
var reset = document.getElementById("reset");

var answers = [
    "It is certain",
    "Without a doubt",
    "Yes, definitely",
    "Ask again later",
    "My sources say no",
    "Very doubtful"
];

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);

    circle.innerHTML = answers[index];
    circle.style.display = "block";
}

ball.addEventListener("mousedown", function() {

    if (question.value === "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }

});

reset.addEventListener("click", function() {
    circle.style.display = "none";
});