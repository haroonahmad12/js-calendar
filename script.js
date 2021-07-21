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

var date = new Date();

//var changingMonth;
var month = date.getMonth(); //Used for Month Name in the Heading

//Last Day

var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // returns number of days of the month

//First Day
var firstDay = new Date(date.getFullYear(), date.getMonth()).getDay();

var daysName = document.querySelectorAll(".name-day");

// Add Event Button
var newEventAdder = document.getElementById("newEvent");

newEventAdder.addEventListener("click", showModal);

function showModal() {
    document.querySelector(".modal").style.display = "flex";
}

// Close Pop up button

let crossButton = document.getElementById("closeEvent");

crossButton.addEventListener("click", closeNewEvent);

function closeNewEvent() {
    document.querySelector(".modal").style.display = "none";
}

//Close Pop up function End

// Modal Cancel Key
let cancelKey = document.getElementById("cancel-btn");

cancelKey.addEventListener("click", clearClose);

function clearClose() {
    let modalStuff = document.querySelector(".modalObjects");

    modalStuff.reset();
}

//Modal Cancel Key function End but it needs to be repeated for the cancel keys in each grid modal

//Creat Event/ Local Storage

let creatEvent = document.getElementById("create-btn");
creatEvent.addEventListener("click", saveData);

function saveData(e) {
    e.preventDefault();

    var inputTitle = document.getElementById("titleName");

    localStorage.setItem("Title", inputTitle.value);
    document.querySelector(".modal").style.display = "none";
}

//Name of the Month

function nameOfMonth() {
    document.querySelector(".month-name").innerHTML = listMonths[month];
    let dayAll = document.querySelectorAll("#days-grid");
    let nextButton = document.getElementById("next");

    nextButton.addEventListener("click", () => {
        if (month < 11) {
            month++;
            document.querySelector(".month-name").innerHTML = listMonths[month];
            //changingMonth = month;
            //console.log(month);
            var updateDate = new Date();

            var dayOne = new Date(updateDate.getFullYear(), month).getDay();

            var dayLast = new Date(updateDate.getFullYear(), month + 1, 0).getDate();

            for (let i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;
            }
        } else {
            month = -1;
            month++;
            document.querySelector(".month-name").innerHTML = listMonths[month];

            var updateDate = new Date();
            var dayOne = new Date(updateDate.getFullYear(), month).getDay();
            var dayLast = new Date(updateDate.getFullYear(), month + 1, 0).getDate();

            for (i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;
            }
        }
    });
    let prevButton = document.getElementById("previous");

    prevButton.addEventListener("click", () => {
        if (month >= 1) {
            month--;

            document.querySelector(".month-name").innerHTML = listMonths[month];
            date.setMonth(month);

            var updateDate = new Date();
            var dayOne = new Date(updateDate.getFullYear(), month).getDay();
            var dayLast = new Date(updateDate.getFullYear(), month + 1, 0).getDate();

            for (i = 0; i < dayLast; i++) {
                dayAll[i - dayLast].innerHTML = i + 1;
            }
        } else {
            month = 12;
            month--;

            document.querySelector(".month-name").innerHTML = listMonths[month];
            var updateDate = new Date();
            var dayOne = new Date(updateDate.getFullYear(), month).getDay();
            var dayLast = new Date(updateDate.getFullYear(), month + 1, 0).getDate();

            for (i = 0; i < dayLast; i++) {
                dayAll[i + dayOne].innerHTML = i + 1;
            }
        }
    });
}
nameOfMonth();

//next and previous month Buttons

// Add days to the Grid and Arrange days in the grid

function addDays() {
    for (day = 0; day < lastDay; day++) {
        let days = document.querySelectorAll("#days");

        days[day + firstDay].innerHTML = day + 1;
    }
}
addDays();

// Update time every Second

function updateTime() {
    var now = new Date();

    document.querySelector(".currentDate").innerHTML = now;
}
updateTime();
setInterval(updateTime, 1000);

//date.setMonth(changingMonth);