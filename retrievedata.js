var nextMonthEvents = document.getElementById("next-month");
var prevMonthEvents = document.getElementById("prev-month");

function printCurrentEvent() {
    let retrieveData = JSON.parse(localStorage.getItem(`CalendarEvents`));
    if (retrieveData !== null) {
        for (let j = 0; j < retrieveData.length; j++) {
            retrieveId = retrieveData[j].id;
            retrieveTitle = retrieveData[j].title;

            if (document.getElementById(`${retrieveId}`) !== null) {
                document.getElementById(
                    `${retrieveId}`
                ).innerHTML += `<div class = "calendar-event">${retrieveTitle}</div>`;
            }
        }
    }
}

printCurrentEvent();

// --------------ADD EVENT LISTENERS

nextMonthEvents.addEventListener("click", printNextEvents);
prevMonthEvents.addEventListener("click", printPrevEvents);

function printNextEvents() {
    printCurrentEvent();
}

function printPrevEvents() {
    printCurrentEvent();
}