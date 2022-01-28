//defined variable
var saveBtn = $(".saveBtn");

function checkTime() {
    let today = moment();

    // cuurent day that is displayed at the top of the page
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

};

function colorBlock() {
    let hour = moment().hours();

    $(".time-block").each(function() {
        let currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        }
        else if (currentHour === hour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("past");
        }
    })
};


// function to change color of time block based on if statement
setInterval(function() {
    $(".container .time-block").each(function(index, el) {
        checkTime(el);
    });
}, 1000);


// save button click function for tiem block
saveBtn.on("click", function() {

});

function dayPlanner() {

    $(".hour").each(function() {

        var hourNow = $(this).text();
        

        var currNote = localStorage.getItem(hourNow);

        
    })
};

// call functions
dayPlanner();
checkTime();
colorBlock();