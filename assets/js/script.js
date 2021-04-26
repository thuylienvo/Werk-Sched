// =========================== FUNCTIONS ========================= //
//CONVERT STRING TO TIME 
function timeToSeconds(time) {
    //console.log(time);
    time = time.split(/:/);
    return time[0] * 3600 + time[1] * 60;
};


let currentTime = new Date().getHours() * 3600 +  new Date().getMinutes() * 60;
console.log(currentTime);


function validateTime(timeEL, currentTime, currentBlock) {
    if (timeEL < currentTime) {
        document.querySelector('.task-input')
        console.log('this is past time');
        currentBlock.parentNode.style.backgroundColor='lightgrey';
    } else if ((timeEL /3600)== new Date().getHours()) {
        document.querySelector('.task-input')
        console.log('this is present time');
        currentBlock.parentNode.style.backgroundColor='red';
    } else if (timeEL > currentTime) {
        document.querySelector('.task-input')
        console.log('this is future time');
        currentBlock.parentNode.style.backgroundColor='green';
        
    }
};


//SAVE TASK 
function saveStorage(button) {
    let userInput = $(button).siblings(".task-input").val();
    var localStorageKey = $(this).siblings("#task-input").text();
    localStorage.setItem(localStorageKey, userInput);
    console.log("saveStorage");
    console.log(userInput);
  }


$(document).ready(function(){
    
    //VARIABLES 
    let currentBlock = $(".hour");
    let timeEL = $('.hour-block');
    let currentDayEl = $('#currentDay');
    let hourEl = $('tr');

    for (let i = 0; i < currentBlock.length; i++) {
        // console.log(i);
        // console.log(currentBlock.length);
        let timeBlock = timeToSeconds(currentBlock[i].innerText);


        validateTime(timeBlock, currentTime, currentBlock[i]);
        saveStorage();
    }

    //TODAY'S DATE 
    currentDayEl.text(moment().format('LLL'));
        console.log(currentDayEl);
})