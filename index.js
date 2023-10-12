const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const number = document.querySelector('.number');

function onclickReset(){
    number.textContent = 0;
    number.style.color = 'black';
}

function onclickInc(){
    const num = Number(number.textContent);
    number.textContent = num+1;
    if(num+1 === 0){
        number.style.color = 'black';
    }
    else if(num+1 > 0){
        number.style.color = 'green';
    }
    else{
        number.style.color = 'red';
    }
}

function onclickDec(){
    const num = Number(number.textContent);
    number.textContent = num-1;
    if(num-1 === 0){
        number.style.color = 'black';
    }
    else if(num-1 > 0){
        number.style.color = 'green';
    }
    else{
        number.style.color = 'red';
    }
}

reset.onclick = onclickReset;
increase.onclick = onclickInc;
decrease.onclick = onclickDec;
