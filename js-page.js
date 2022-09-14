const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const adivinha = { //Guess
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max) 
    }
};

let numberDrawn = adivinha.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite um valor!');
        return;
    };
    updateAttempt(attempt, ++adivinha.attemptsNumber);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.background = '#d6e4cd';
        result.style.color = '';
        result.style.fontFamily = 'Quicksand'; 
        
    }

    else if(numberDrawn > kick)
    {
        status.innerHTML = 'O número é maior!';
        result.style.color = '#B22222';
        result.style.fontFamily = 'Quicksand'; 
        clear();

    }
    else if (numberDrawn < kick)
    {
        status.innerHTML = 'O número é menor!';
        result.style.color = '#B22222';
        result.style.fontFamily = 'Quicksand'; 
        clear();
    }
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart () { //reiniciar o jogo
    document.location.reload(true);
    result.style.padding = '5px';
    
};

function clear () {
    document.getElementById('kick').value = '';
};