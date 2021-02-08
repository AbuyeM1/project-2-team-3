$(document).ready(function() {
    var interest = $(".interest");

    interest.on("click", function() {
        var choice = this.getAttribute('data-choice');
        console.log(choice);
        $(".content").hide();

        sendInterest(choice);
    });

});

function sendInterest(choice) {
    $.get("/api/users", {
        choice: choice
    }).then(data => {
        console.log(data);
    });
}