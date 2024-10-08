path = window.location.pathname;
let screensaverTimeOutSeconds;
if (path.includes('flags.html')) {
    screensaverTimeOutSeconds = 30;
} else if (path.includes('stories.html')) {
    screensaverTimeOutSeconds = 30;
}
else {
    screensaverTimeOutSeconds = 240;
}
const screensaverTimeOut = screensaverTimeOutSeconds * 1000;
const home = "index.html";
const debugMode = true;
$(document).ready(function () {
    let counter = 0;
    let timeout;
    let timer_on = 0;

    startScreensaverCountdown();

    $('body').on("click", function () {
        clearTimeout(screensaver);
        startScreensaverCountdown()
    });
    function startScreensaverCountdown() {
        screensaver = setTimeout(goHome, screensaverTimeOut);
        resetCount();

        function goHome() {
            stopCount();
            window.location.href = home;
        }
    }


    // TIMER FUNCTIONALITY.
    // USED FOR DEBUGGING THE SCREENSAVER COUNTDOWN.
    function resetCount() {
        stopCount();
        startCount();
    }

    function timedCount() {
        counter++;
        if (debugMode) {
            console.log(counter);
        }
        timeout = setTimeout(timedCount, 1000);
    }

    function startCount() {
        if (!timer_on) {
            timer_on = 1;
            timedCount();
        }
    }

    function stopCount() {
        clearTimeout(timeout);
        counter = 0;
        timer_on = 0;
    }
});