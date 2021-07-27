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

function saveData(e) {
    //e.preventDefault();

    //Get Date Value from the input form
    if (document.getElementById("dateTime").value !== "") {
        //Split date and time values

        var splitted = document.getElementById("dateTime").value;

        var completeDateForReminder = splitted;

        splitted = splitted.split("T");

        // Date Found

        var date = splitted[0];
        //Time Found

        var time = splitted[1];

        splitted = splitted[0].split("-");
        //All Data Found

        var eventYear = parseInt(splitted[0]);
        var eventMonth = parseInt(splitted[1]) - 1;
        var eventDay = parseInt(splitted[2]);
        //ID for days which coincides with the respective date.

        var newDaysId = eventDay + "_" + eventMonth + "_" + eventYear;
        var title = document.getElementById("titleName").value;
        var id = newDaysId;
        var date;
        var descriptionValue = document.getElementById("description").value;
        var eventType = document.getElementById("typeEvent").value;
        var endDate = document.getElementById("end-date").value;
        var endTime = document.getElementById("end-time").value;
        var remindInterval = document.getElementById("reminder-select").value;

        var delId = Math.floor(Math.random() * 1000000);

        let newArray = {
            id: id,
            title: title,
            date: date,
            time: time,
            description: descriptionValue,
            eventType: eventType,
            endDate: endDate,
            endTime: endTime,
            remindInterval: remindInterval,
            delId: delId,
            reminderDate: completeDateForReminder,
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