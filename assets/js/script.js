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
function pastTime(timeEL, currentTime, currentBlock) {
    if (timeEL <= currentTime) {
        document.querySelector('.task-input')
        console.log('this is past time');
        currentBlock.parentNode.style.backgroundColor='grey';
    }
}

//PRESENT TIME BLOCK
function presentTime(timeEL, currentTime, currentBlock) {
    if (timeEL === currentTime) {
        document.querySelector('.task-input')
        console.log('this is present time');
        currentBlock.parentNode.style.backgroundColor='orange';
    }
}

//FUTURE TIME BLOCK
function futureTime(timeEL, currentTime, currentBlock) {
    if (timeEL >= currentTime) {
        document.querySelector('.task-input')
        console.log('this is future time');
        currentBlock.parentNode.style.backgroundColor='blue';
    }
}

//SAVE TASK 



$(document).ready(function(){
    //console.log('Hello! Y you no worky');
    
    //VARIABLES 
    let currentBlock = $(".hour");
    let timeEL = $('.hour-block');
    let currentDayEl = $('#currentDay');
    let hourEl = $('tr');

    for (let i = 0; i < currentBlock.length; i++) {
        console.log(i);
        console.log(currentBlock.length);
        let timeBlock = timeToSeconds(currentBlock[i].innerText);

        pastTime(timeBlock, currentTime, currentBlock[i]);
        futureTime(timeBlock, currentTime, currentBlock[i]);
        presentTime(timeBlock, currentTime, currentBlock[i]);
    }

    //TODAY'S DATE 
    currentDayEl.text(moment().format('LLLL'));
        console.log(currentDayEl);
})