// WORK SCHEDULE LOGIC 

//SCHEDULE LOGIC 

// VARIABLES
let timeEL = document.querySelector('.time-block')
let currentDayEl = document.querySelector('#currentDay')


//When I load the page
//
currentDayEl.textContent = moment().format('LLLL');
console.log(currentDayEl);

//Saving a task
function saveTask() {
    console.log(this)
};

document.querySelector('.saveBtn').addEventListener('click', saveTask);