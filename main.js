document.addEventListener('DOMContentLoaded', function () {
    var dateDisplay = document.getElementById('date');
    var timeDisplay = document.getElementById('time');


    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var lastDateOfMonth = now.getDate();

    var day = now.getDay();

    setInterval(update, 1000);
    function update() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        if (hours === 24) {
            hours = 0;
            date++;
        }
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) {
            if (date > 31) {
                date = 1;
                month++;
            }
        }
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            if (date > 30) {
                date = 1;
                month++;
            }
        }
        if (month === 2) {
            if (year % 4 == 0) {
                if (date > 29) {
                    date = 1;
                    month++;
                }
                else if (year % 4 !== 0) {
                    if (date > 28) {
                        date = 1;
                        month++;
                    }
                }
            }
            if (month === 12) {
                if (date > 31) {
                    date = 1;
                    year++;
                }
            }
        }
        dateDisplay.innerHTML = date + "      " + month + "      " + year;
        timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    var sunRadio = document.getElementById("Sun");
    var monRadio = document.getElementById("Mon");
    var tueRadio = document.getElementById("Tue");
    var wedRadio = document.getElementById("Wed");
    var thrRadio = document.getElementById("Thr");
    var friRadio = document.getElementById("Fri");
    var satRadio = document.getElementById("Sat");

    if (day === 0) {
        sunRadio.style.color = "red";
    } else if (day === 1) {
        monRadio.style.color = "red";
    } else if (day === 2) {
        tueRadio.style.color = "red";
    } else if (day === 3) {
        wedRadio.style.color = "red";
    } else if (day === 4) {
        thrRadio.style.color = "red";
    } else if (day === 5) {
        friRadio.style.color = "red";
    } else if (day === 6) {
        satRadio.style.color = "red";
    }


});
