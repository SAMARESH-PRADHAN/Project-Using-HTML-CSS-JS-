const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showtime,1000);
});

const showtime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    sec = sec<10 ? `0${sec}` : sec;
    time.innerHTML = `${hr}:${mins}:${sec}`;

    timeformat.innerHTML = hr>12?"PM":"AM"

}