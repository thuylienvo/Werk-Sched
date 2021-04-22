$(document).ready(function() {
    console.log('Hello! Y you no worky')
    
    //Variables 
    let timeEL = $('.time-block');
    let currentDayEl = $('#currentDay');

    //Date 
    currentDayEl.text(moment().format('LLLL'))
        console.log(currentDayEl);

    function saveTask() {
        console.log($(this))
    };

    $('.saveBtn').on('click', saveTask);
})