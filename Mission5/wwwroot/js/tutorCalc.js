console.log("tutorCalc.js loaded");

$(document).ready(function () {
    console.log("document ready - handler wiring");

    $("#calcBtn").on("click", function () {
        console.log("calc button clicked");

        $("#errorMsg").text("");
        $("#totalOutput").val("");

        let hours = parseFloat($("#hoursInput").val());
        let rate = parseFloat($("#rateInput").val());

        if (isNaN(hours) || hours <= 0) {
            $("#errorMsg").text("Please enter a positive number of hours.");
            return;
        }

        let total = hours * rate;
        $("#totalOutput").val(total.toFixed(2));
    });
});
