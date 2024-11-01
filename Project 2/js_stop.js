// Stopwatch variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = "00";
let displayMinutes = "00";
let displayHours = "00";
let interval; // interval timer
let isRunning = false;

// Function to update the stopwatch display with zeros if necessary
function updateDisplay() {
    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }

    // Update HTML element with new time
    let timeString = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    document.getElementById("display").innerHTML = timeString;
}

// Function for the main stopwatch mechanism
function stopwatch() {
    seconds = seconds + 1; // increment seconds by 1 each time

    if (seconds >= 60) {
        seconds = 0;
        minutes = minutes + 1;

        if (minutes >= 60) {
            minutes = 0;
            hours = hours + 1;
        }
    }

    // Call the update function to show changes
    updateDisplay();
}

// Function to start the stopwatch
function start() {
    if (isRunning === false) { // only start if not running
        interval = setInterval(stopwatch, 1000);
        isRunning = true;
    }
}

// Function to stop the stopwatch
function stop() {
    clearInterval(interval); // stop the interval
    isRunning = false;
}

// Function to reset the stopwatch
function reset() {
    clearInterval(interval); // clear interval in case it's running
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displaySeconds = "00"; // reset displays separately
    displayMinutes = "00";
    displayHours = "00";
    updateDisplay(); // call display update to show reset time
}

// Add event listeners to buttons (start, stop, reset)
document.getElementById("start").addEventListener("click", start); // start button
document.getElementById("stop").addEventListener("click", stop); // stop button
document.getElementById("reset").addEventListener("click", reset); // reset button
