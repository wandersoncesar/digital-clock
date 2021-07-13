(function() {
    var NUMBER_OF_THEMES = 6;
    var A_SECOND_IN_MILLISECONDS = 1000;

    var main = document.getElementById("main");

    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    var lastThemeNumber = 1;

    document.getElementById("theme").addEventListener("click", changeTheme);

    updateClock();
    setInterval(updateClock, A_SECOND_IN_MILLISECONDS);

    function updateClock() {
        var now = new Date();

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
    }

    function changeTheme() {
        removeAllThemes();
        addNewTheme();
    }

    function removeAllThemes() {
        for (var index = 0; index < NUMBER_OF_THEMES; index++) {
            main.classList.remove("theme-" + (index + 1));
        }
    }

    function addNewTheme() {
        var newThemeNumber = Math.floor(Math.random() * NUMBER_OF_THEMES) + 1;

        if (newThemeNumber == lastThemeNumber) {
            addNewTheme();
        } else {
            main.classList.add("theme-" + (newThemeNumber));
            lastThemeNumber = newThemeNumber;
        }
    }
})();