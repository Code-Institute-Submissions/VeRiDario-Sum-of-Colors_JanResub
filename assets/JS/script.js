document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    document.getElementById("answer").addEventListener("keydown", function(event) {
        if  (event.key === "Enter") {
            checkAnswer();
        }
    })

});

let randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color1').style.backgroundColor = randomColor1 ;

let randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color2').style.backgroundColor = randomColor2 ;

var correctAnswer = blendColors(randomColor1, randomColor2,0.5);

function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);``````````
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function submitAnswer()
{
    var answer = document.getElementById('answer').value;
    if (answer == correctAnswer) {
        alert("Right answer!");
        incrementScore();
    } else {
        alert(`Wrong answer!`);
        incrementWrongAnswer();
    }
}

// blend two hex colors together by an amount
function blendColors(colorA, colorB, amount) {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}