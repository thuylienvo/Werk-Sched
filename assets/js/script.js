// =========================== FUNCTIONS ========================= //
//CONVERT STRING TO TIME 
function timeToSeconds(time) {
    //console.log(time);
    time = time.split(/:/);
    return time[0] * 3600 + time[1] * 60;
};

let currentTime = new Date().getHours() * 3600 +  new Date().getMinutes() * 60;
console.log(currentTime);

//PAST TIME BLOCK
function pastTime(timeEL, currentTime) {
    if (timeEL <= currentTime) {
        console.log('this is past time');
    }

}

//PRESENT TIME BLOCK

//FUTURE TIME BLOCK

//SAVE TASK 

//DELETE TASK



$(document).ready(function(){
    //console.log('Hello! Y you no worky');
    
    //VARIABLES 
    let currentBlock = $(".time")[0].innerText;
    let timeEL = $('.time-block');
    let currentDayEl = $('#currentDay');
    let timeBlock = timeToSeconds(currentBlock);

    //TODAY'S DATE 
    currentDayEl.text(moment().format('LLLL'));
        console.log(currentDayEl);


        pastTime(timeBlock, currentTime);    
})