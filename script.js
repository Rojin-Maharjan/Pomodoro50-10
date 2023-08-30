
var reset  = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');

var workTime = 49;
var seconds = 59;

var time = document.getElementById('time');
var workBtn = document.getElementById('work');
var breakTime = document.getElementById('shortbreak');
var buttons = document.querySelectorAll('.btn');

var paused = true;
var set;

time.textContent = `${workTime + 1} : 00` ;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};
const removeWork = () =>{
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
 };
 workBtn.addEventListener("click", ()=>{
    removeWork();
    workBtn.classList.add("active");
    pauseTime();
    workTime = 49;
    seconds = 59;
    time.textContent = `${workTime + 1} : 00`;
 });
 breakTime.addEventListener("click", () =>{
    removeWork();
    breakTime.classList.add("active");
    pauseTime();
    workTime = 9;
    seconds = 59;
    time.textContent = `${appendZero(workTime + 1)} : 00`;
 });
 pause.addEventListener("click", (
    pauseTime = () =>{
        paused = true;
        clearInterval(set);
        start.classList.remove("hide");
        reset.classList.remove("show");
        reset.classList.add("hide");
        pause.classList.remove("show");
        pause.classList.add("hide");
    }
 ));
 reset.addEventListener("click", () => {
        pauseTime();
        seconds = 59;
        workTime = 49;
        time.textContent = `${appendZero(workTime + 1)} : 00`;
    }
);
 start.addEventListener("click" , () => {
    reset.classList.add("show");
    reset.classList.remove("hide")
    pause.classList.add("show");
    pause.classList.remove("hide");
    start.classList.add("hide");
    start.classList.remove("show");
    if(paused){
        paused = false;
        time.textContent = `${appendZero(workTime)} : ${appendZero(seconds)}`;
        set = setInterval(() => {
            seconds --;
            time.textContent = `${appendZero(workTime)} : ${appendZero(seconds)}`;
            if(seconds == 0){
                if(workTime != 0){
                    workTime --;
                    seconds = 60;
                }
                 else{
                    clearInterval(set);
                }
            }
        },1000);
        }
 }
);

// function start(){

//     document.getElementById('start').style.display = "none";
//     document.getElementById('reset').style.display = "block";


//     seconds = 3;

//     let workMinutes = workTime - 1;
//     let breakMinutes = breakTime - 1;

//     breakCount = 0;
    
//     let timerFunction = () => {
//     document.getElementById('minutes').innerHTML = workMinutes;
//     document.getElementById('seconds').innerHTML = seconds;

//     seconds = seconds - 1;

//     if(seconds === 0){
//         workMinutes = workMinutes - 1;
//         if(workMinutes === -1){
//             if(breakCount % 2 ===0){
//                 workMinutes = breakMinutes;
//                 breakCount ++;
//                 workTittle.classList.remove('active');
//                breakTittle.classList.add('active');
//             }
//             else{
//             workMinutes = workTime;
//             breakCount ++;
//             breakTittle.classList.remove('active');
//             workTittle.classList.add('active'); 
//         }
//         document.getElementById('start').style.display = "block";
//         document.getElementById('reset').style.display = "none";

//         // function playSound(audioName, loop){
//         //     let audio = new Audio(audioName);
//         //     audio.loop = loop;
//         //     audio.play();
//         // }
//         // playSound("sound/iPhone-Alarm-Original.mp3", true);

//         }
//         seconds = 59;
//     }
//     }
//     setInterval(timerFunction, 1000);

// }