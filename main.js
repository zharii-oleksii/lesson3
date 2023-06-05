document.getElementById("button6").addEventListener("click", function () {
    let hours = parseInt(prompt("Enter the number of hours:"));
    while (isNaN(hours)) {
        hours = parseInt(prompt("Err: wrong input. Enter the number of hours AS DIGIT:"));
    }
    let secondsInHours = hours * 3600;
    alert('There are ' + secondsInHours + ' seconds in ' + hours + ' hours')
});