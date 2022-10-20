var gameColors = [['#f4e202','#056ec0'],
        ['#056ec0','#eb0104'],
        ['#f4e202','#60de00'],
        ['#f16b00','#f5e202'],
        ['#056ec0','#ffffff'],
        ['#9c6eaf','#e24944'],
        ['#5297c1','#e49996'],
        ['#266c16','#e71b1a'],
        ['#cae28e','#f650f2'],
        ['#08fdf8','#bce692'],
        ['#f4e202','#ed0407'],
        ['#056ec0','#a9007f'],
        ['#ed0407','#f36906'],
        ['#a6007f','#ed0407'],
        ['#056ec0','#878787'],
        ['#087d2c','#0270bb'],
        ['#460a16','#bce893'],
        ['#4f9e1f','#e7ac66'],
        ['#5cc8b1','#b3ba8e'],
        ['#000000','#ffffff']
    ];
var answerColors = ['#60de00','#a9007f','#c4ef01','#f68f04','#83bddb','#cb5771','#a772de','#3d1a20','#dd70f0','#4af58b','#f36906','#3304aa','#f74b01','#cc024e','#18506f','#038c9e','#464322','#daab39','#77bf7f','#808080'];

// random numeber between 0 - 19
var r = Math.floor(Math.random() * 20);

correctAnswer = answerColors[r];
document.getElementById('color1').style.backgroundColor = gameColors[r][0] ;
document.getElementById('color2').style.backgroundColor = gameColors[r][1] ;


function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function submitAnswer()
{
    var answer = document.getElementById('answer').value;
    console.log(answer, correctAnswer)
    if (answer == correctAnswer) {
        alert("Right answer!");
        incrementScore();
    } else {
        alert(`Wrong answer!`);
        incrementWrongAnswer();
    }
}