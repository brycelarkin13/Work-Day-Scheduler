//defined variable
var saveBtn = $(".saveBtn");

// cuurent day that is displayed at the top of the page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// function to change color of time block based on if statement
function blockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var hourNow = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (hourNow > hour) {

            $(this).addClass("future");

        } else if (hourNow === hour) {

            $(this).addClass("present");

        } else {
            
            $(this).addClass("past");
        }
    })
};


// save button click function for tiem block
saveBtn.on("click", function() {

    var time = $(this).children(".hour").text();
    var note = $(this).children(".notes").val();

    localStorage.setItem(time, note);
});

function dayPlanner() {

    $(".hour").each(function() {

        var hourNow = $(this).text();
        console.log(this);

        var currNote = localStorage.getItem(hourNow);

        
    })
}

// call functions
dayPlanner();
blockColor();