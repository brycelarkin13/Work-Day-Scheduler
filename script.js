var saveBtn = $(".saveBtn");

// cuurent day that is displayed at the top of the page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

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



saveBtn.on("click", function() {

    var time = $(this).children(".hour").text;
    var note = $(this).children(".note").value;
});