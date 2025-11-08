var timer= 60;
var score = 0;
var hitrn= 0;

function getNewHit(){
hitrn = Math.floor(Math.random()*10);
document.querySelector('#hitVal').textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent= score
}

function makeBubbles() {
    let clutter = '';
    for (let i = 1; i <= 133; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    timerInt= setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerVal').textContent = timer
        }else{
            clearInterval(timerInt);
            document.querySelector('#pbtm').innerHTML=`<h1 style="color: red; font-size: 50px;">Game Over</h1>`
        }
    }, 1000);
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
    clickedNumber= Number(dets.target.textContent);

    if(clickedNumber == hitrn){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
    
})

getNewHit();
runTimer();
makeBubbles();


