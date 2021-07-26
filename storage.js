let creatEvent = document.getElementById("create-btn");

var saveDataArray;

function saveLocalData() {
    if (localStorage.getItem(`CalendarEvents`) !== null) {
        saveDataArray = JSON.parse(localStorage.getItem(`CalendarEvents`));
    } else {
        saveDataArray = [];
    }
}
saveLocalData();

creatEvent.addEventListener("click", saveData);

function saveData() {
    //Get Date Value from the input form
    if (document.getElementById("dateTime").value !== "") {
        var splitted = document.getElementById("dateTime").value;
        splitted = splitted.split("-");

        var time = splitted[2].split("T");

        time = time[1];

        var eventYear = parseInt(splitted[0]); //INTEGER
        var eventMonth = parseInt(splitted[1]) - 1;

        splitted = splitted[2].split(":");
        splitted = splitted[0].split("T");
        eventDay = parseInt(splitted[0]);

        var newDaysId = eventDay + "_" + eventMonth + "_" + eventYear; //ID for days which coincides with the respective date.

        var title = document.getElementById("titleName").value;
        var id = newDaysId;
        var date = eventDay + "/" + eventMonth + "/" + eventYear;
        var descriptionValue = document.getElementById("description").value;
        var eventType = document.getElementById("typeEvent").value;
        var endDate = document.getElementById("end-date").value;
        var endTime = document.getElementById("end-time").value;
        var remindInterval = document.getElementById("reminder-select").value;

        let newArray = {
            id: id,
            title: title,
            date: date,
            time: time,
            description: descriptionValue,
            eventType: eventType,
            endDate: endDate,

            remindInterval: remindInterval,
            delId: Math.floor(Math.random() * 1000000),
        };
        saveDataArray.push(newArray);

        localStorage.setItem(`CalendarEvents`, JSON.stringify(saveDataArray));

        //Add Event Div to Calendar Days
        if (document.getElementById(id) !== null) {
            document.getElementById(
                id
            ).innerHTML += `<div class = "calendar-event" id = "${delId}">${title}</div>`;

            //close event window after adding event

            closeNewEvent();
        }
    }
}