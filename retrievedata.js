var nextMonthEvents = document.getElementById("next-month");
var prevMonthEvents = document.getElementById("prev-month");

// --------------ADD EVENT LISTENERS

nextMonthEvents.addEventListener("click", printNextEvents);
prevMonthEvents.addEventListener("click", printPrevEvents);

function printNextEvents() {
    var dias = document.querySelectorAll(".every_date");

    for (let i = 0; i < 42; i++) {
        let allDaysId = dias[i].getAttribute("id");
    }
}

function printPrevEvents() {
    console.log("read correct");
}