var nextMonthEvents = document.getElementById("next-month");
var prevMonthEvents = document.getElementById("prev-month");
var retrieveData;

function printCurrentEvent() {
    retrieveData = JSON.parse(localStorage.getItem(`CalendarEvents`));

    if (retrieveData !== null) {
        for (let j = 0; j < retrieveData.length; j++) {
            var retrieveId = retrieveData[j].id;
            var deletionId = retrieveData[j].delId;

            var retrieveTitle = retrieveData[j].title;

            if (document.getElementById(`${retrieveId}`) !== null) {
                document.getElementById(
                    `${retrieveId}`
                ).innerHTML += `<div class = "calendar-event" id = "${deletionId}">${retrieveTitle}</div>`;
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

/*prueba
function getIds() {
    let n = document.querySelectorAll(".calendar-event");

    for (let i = 0; i < n.length; i++) {
        n = parseInt(n[i].getAttribute("id"));

        console.log(n);
    }
}

getIds(); */