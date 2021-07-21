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

let date = new Date();

//Last Day

let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // returns number of days of the month

//First Day
let firstDay = new Date(date.getFullYear(), date.getMonth()).getDay();

let daysName = document.querySelectorAll(".name-day");

// Add Event Button
let newEventAdder = document.getElementById("newEvent");

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
    let month = date.getMonth(); //Used for Month Name in the Heading
    document.querySelector(".month-name").innerHTML = listMonths[month];

    let nextButton = document.getElementById("next");

    nextButton.addEventListener("click", () => {
        if (month !== 11) {
            month++;
            date.setMonth(month);

            console.log(date);
            document.querySelector(".month-name").innerHTML = listMonths[month];
        }

        let prevButton = document.getElementById("previous");

        prevButton.addEventListener("click", () => {
            if (month < 11 && month > 0) {
                month--;
                document.querySelector(".month-name").innerHTML = listMonths[month];
                console.log(month);
            }
        });
    });
}
nameOfMonth();

//next and previous month Buttons

// Add days to the Grid and Arrange days in the grid

function addDays() {
    for (day = 0; day < lastDay; day++) {
        let days = document.querySelectorAll(".days");

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