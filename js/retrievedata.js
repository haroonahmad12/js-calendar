var nextMonthEvents = document.getElementById("next-month");
var prevMonthEvents = document.getElementById("prev-month");

function printCurrentEvent() {
    if (saveDataArray !== null) {
        for (let j = 0; j < saveDataArray.length; j++) {
            var retrieveId = saveDataArray[j].id;
            var deletionId = saveDataArray[j].delId;

            var retrieveTitle = saveDataArray[j].title;

            if (document.getElementById(`${retrieveId}`) !== null) {
                document.getElementById(
                    `${retrieveId}`
                ).innerHTML += `<span class = "calendar-event" id = "${deletionId}">${retrieveTitle}</span>`;
            }
        }
    }
}
// SHOW EVENTS WHEN PAGE LOADS

printCurrentEvent();

// --------------ADD EVENT LISTENERS

nextMonthEvents.addEventListener("click", printNextEvents);
prevMonthEvents.addEventListener("click", printPrevEvents);

//---------------SHOW THE NEW EVENTS WHEN THE MONTH CHANGES

function printNextEvents() {
    printCurrentEvent();
    recieveAllEvents();
}

function printPrevEvents() {
    printCurrentEvent();
    recieveAllEvents();
}