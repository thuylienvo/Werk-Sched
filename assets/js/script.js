$(document).ready(function() {
    console.log('hello')
    
    //Variables 
    let timeEL = $('.time-block');
    let currentDayEl = $('#currentDay');

    //Date 
    currentDayEl.text(moment().format('LLLL'))
        console.log(currentDayEl);

    function saveTask() {
        alert($(this));
    };

    $('.saveBtn').on('click', saveTask);
})