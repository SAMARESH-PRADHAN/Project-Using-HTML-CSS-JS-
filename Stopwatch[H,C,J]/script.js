let timerdisplay = document.querySelector(".timer-display");
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerid = null;

startbtn.addEventListener("click", function(){
    if(timerid!== null){
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer, 10);
});

stopbtn.addEventListener("click", function(){
    clearInterval(timerid);
});

resetbtn.addEventListener("click", function(){
    clearInterval(timerid);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function starttimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : secs;
    let minstring = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minstring} : ${secsstring} : ${msecstring}`;
}