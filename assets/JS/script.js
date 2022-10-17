document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    document.getElementById("answer").addEventListener("keydown", function(event) {
        if  (event.key === "Enter") {
            checkAnswer();
        }
    })

});

    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();

let randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color1').style.backgroundColor = randomColor1 ;

let randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color2').style.backgroundColor = randomColor2 ;
 
function checktAnswer() {
        let userAnswer = parseInt(document.getElementById("answer").value);
        let calculatedAnswer = correctAnswer();
        let isCorrect = userAnswer === calculatedAnswer[0];
    
        if (isCorrect) {
            alert("Right answer!");
            incrementScore();
        } else {
            alert(`Wrong answer!`);
            incrementWrongAnswer();
        }
    
        runGame(calculatedAnswer[1]);   
}

var correctAnswer = mix(randomColor1, randomColor2);

function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}