
let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 50;
let breakTime = 10;

let seconds = "00";

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}
function start(){

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";


    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;
    
    let timerFunction = () => {
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;

    seconds = seconds - 1;

    if(seconds === 0){
        workMinutes = workMinutes - 1;
        if(workMinutes === -1){
            if(breakCount % 2 ===0){
                workMinutes = breakMinutes;
                breakCount ++;
                workTittle.classList.remove('active');
               breakTittle.classList.add('active');
            }
            else{
            workMinutes = workTime;
            breakCount ++;
            breakTittle.classList.remove('active');
            workTittle.classList.add('active'); 
        }
        // function playSound(audioName, loop){
        //     let audio = new Audio(audioName);
        //     audio.loop = loop;
        //     audio.play();
        // }
        // playSound("sound/iPhone-Alarm-Original.mp3", true);

        }
        seconds = 59;
    }
    }
    setInterval(timerFunction, 1000);

}