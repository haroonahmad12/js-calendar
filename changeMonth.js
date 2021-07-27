// --------------VARIABLE DECLARATIONS

// MONTHS AND DAYS ARRAYS
var monthsNames = [
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

// CURRENT DATE

var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

// DATES

var days = document.getElementById("days");
var month = document.getElementById("month");
var year = document.getElementById("year");

var lastDay;
var lastCell;

// BUTTONS

var nextMonth = document.getElementById("next-month");
var prevMonth = document.getElementById("prev-month");

// --------------ADD EVENT LISTENERS

nextMonth.addEventListener("click", followingMonth);
prevMonth.addEventListener("click", previousMonth);
//---------------END EVENT LISTENERS

// DECLARING MONTHS AND DISPLAYING MONTHS FUNCTION

month.innerHTML = monthsNames[currentMonth];
year.innerHTML = currentYear.toString();

function monthBeginning() {
    let beginning = new Date(currentYear, currentMonth, 1);
    return beginning.getDay();
}

function createMonth(month) {
    for (let j = monthBeginning(currentMonth); j > 0; j--) {
        days.innerHTML += `<div class='every_date previous_month_date'>${
      lastDay - (j - 1)
    }</div>`;
    }

    for (let i = 1; i <= 42; i++) {
        if (
            i === currentDay &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            days.innerHTML += `<div class='every_date today_date' id='${i}_${currentMonth}_${currentYear}'  data-date='every_date'>
                <p class="day_number">${i}</p>
                <button class="plus_button" data-button='plus-button'>+</button>
                </div>`;
        } else if (i <= lastDay) {
            days.innerHTML += `<div class='every_date current_month_date' data-date='every_date' id ="${i}_${currentMonth}_${currentYear}">
                <p class="day_number">${i}</p>
                <button class="plus_button" data-button='plus-button'>+</button>
                </div>`;
        } else if (i <= lastDay + 1) {
            for (let j = 1; j <= lastCell; j++)
                days.innerHTML += `<div class='every_date next_month_date'>${j}</div>`;
        }
    }
}

function printNewMonth() {
    currentDate.setFullYear(currentYear, currentMonth, currentDay);
    month.innerHTML = monthsNames[currentMonth];
    year.innerHTML = currentYear.toString();

    lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    lastCell = 42 - (lastDay + monthBeginning(currentMonth));
    days.innerHTML = "";
    createMonth(currentMonth);
}

printNewMonth(currentMonth);
//END FUNCTION: MONTHS DISPLAYED

// MONTH HEADING AND YEAR CHANGING FUNCTION

function followingMonth() {
    if (currentMonth !== 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }
    printNewMonth();
}

function previousMonth() {
    if (currentMonth !== 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYear--;
    }
    printNewMonth();
}

//END FUNCTION

// FUNCTION TO UPDATE TIME EVERY SECOND

function updateTime() {
    var now = new Date();
    document.getElementById("current_time").innerHTML = now;
}
updateTime();
setInterval(updateTime, 1000);