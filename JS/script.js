var listMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
// Declaring Global Variables

var date = new Date();
var month = date.getMonth(); //Used for Month Name in the Heading
var year = date.getFullYear();
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // returns number of days of the month
var firstDay = new Date(date.getFullYear(), date.getMonth()).getDay(); // First Day of the Current Month
var daysName = document.querySelectorAll(".name-day"); // Names of weekdays

//Name of the Month

function nameOfMonth() {
    document.querySelector(".month-name").innerHTML =
        listMonths[month] + " " + year;
    let dayAll = document.querySelectorAll(".days");
    let nextButton = document.getElementById("next");

    nextButton.addEventListener("click", () => {
        for (i = 0; i < 42; i++) {
            dayAll[i].innerHTML = "";
            dayAll[i].setAttribute("id", "inActiveDay");
        }
        //No border Days

        if (month < 11) {
            month++;
            document.querySelector(".month-name").innerHTML =
                listMonths[month] + " " + year;
            //changingMonth = month;
            //console.log(month);
            var updateDate = new Date();

            var dayOne = new Date(updateDate.getFullYear(), month).getDay();

            var dayLast = new Date(updateDate.getFullYear(), month + 1, 0).getDate();

            for (let i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;
                dayAll[i + dayOne].setAttribute("id", i + 1);
            }
        } else {
            year++;
            console.log(year);
            month = -1;
            month++;
            document.querySelector(".month-name").innerHTML =
                listMonths[month] + " " + year;

            var updateDate = new Date();
            var dayOne = new Date(year, month).getDay();
            var dayLast = new Date(year, month + 1, 0).getDate();

            for (i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;
                dayAll[i + dayOne].setAttribute("id", i + 1);
            }
        }
    });
    let prevButton = document.getElementById("previous");

    prevButton.addEventListener("click", () => {
        for (i = 0; i < 42; i++) {
            dayAll[i].innerHTML = "";
            dayAll[i].setAttribute("id", "inActiveDay");
        }
        if (month > 0) {
            month--;

            document.querySelector(".month-name").innerHTML =
                listMonths[month] + " " + year;
            date.setMonth(month);

            var updateDate = new Date();
            var dayOne = new Date(updateDate.getFullYear(), month).getDay();
            var dayLast = new Date(updateDate.getFullYear(), month + 1, 0).getDate();
            console.log(dayOne);
            console.log(dayLast);
            for (i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;
                dayAll[i + dayOne].setAttribute("id", i + 1);
            }
        } else {
            month = 12;
            year--;

            month--;

            document.querySelector(".month-name").innerHTML =
                listMonths[month] + " " + year;
            var updateDate = new Date();
            var dayOne = new Date(year, month).getDay();

            var dayLast = new Date(year, month + 1, 0).getDate();

            for (i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;

                dayAll[i + dayOne].setAttribute("id", i + 1);
            }
        }
    });
}
nameOfMonth();

//Hide the unused Day Squares
function addIds() {
    let days = document.querySelectorAll(".days");
    for (i = 0; i < 42; i++) {
        days[i].setAttribute("id", "inActiveDay");
    }
}

addIds();
// Add days to the Grid and Arrange days in the grid
function addDays() {
    for (day = 0; day < lastDay; day++) {
        let days = document.querySelectorAll(".days");

        days[day + firstDay].textContent = day + 1;

        days[day + firstDay].setAttribute("id", day + 1);
    }
}
addDays();

//CurrentDate

// Update time every Second

function updateTime() {
    var now = new Date();

    document.querySelector(".currentDate").innerHTML = now;
}
updateTime();
setInterval(updateTime, 1000);