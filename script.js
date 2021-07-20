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

let month = date.getMonth();

//Last Day

let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

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
    /*var dateAndtime = document.getElementById("dateTime");
                                                                                                                                                                                                                                                    localStorage.setItem("When", dateAndtime.value);*/
}

function addDays() {
    document.querySelector(".month-name").innerHTML = listMonths[month];

    for (day = 1; day <= lastDay; day++) {
        let days = document.querySelectorAll(".days");

        days[day].innerHTML = [day];
    }
}

addDays();

function updateDate() {
    document.querySelector(".currentDate").innerHTML = date;
}

updateDate();