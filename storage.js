let creatEvent = document.getElementById("create-btn");

var saveDataArray;

// get local Storage items
/*
function getLocalItems() {
    if (localStorage.getItem("Forms") !== null) {
        saveDataArray = JSON.parse(localStorage.getItem("Forms"));
    } else {
        saveDataArray = [];
    }
}
getLocalItems();

*/
creatEvent.addEventListener("click", saveData);

function saveData(e) {
    e.preventDefault();

    //Get Date Value from the input form
    var splitted = document.getElementById("dateTime").value;
    splitted = splitted.split("-");

    var eventYear = parseInt(splitted[0]);
    var eventMonth = parseInt(splitted[1]) - 1;

    splitted = splitted[2].split(":");
    splitted = splitted[0].split("T");
    eventDay = parseInt(splitted[0]);

    var newDaysId = eventDay + "_" + eventMonth + "_" + eventYear; //ID for days which coincides with the respective date.

    var title = document.getElementById("titleName").value;
    var date = newDaysId;
    var descriptionValue = document.getElementById("description").value;
    var eventType = document.getElementById("typeEvent").value;
    var endDate = document.getElementById("end-date").value;
    var endTime = document.getElementById("end-time").value;
    var remindInterval = document.getElementById("reminder-select").value;

    //document.getElementById(newDaysId).innerHTML += `<div>${title}</div>`; //Add Event Div to Calendar Days

    //Save local Data
    if (localStorage.getItem(`${date}`) !== null) {
        saveDataArray = JSON.parse(localStorage.getItem(`${date}`));
    } else {
        saveDataArray = [];
    }

    let newArray = {
        title: title,
        date: date,
        description: descriptionValue,
        eventType: eventType,
        endDate: endDate,
        endTime: endTime,
        remindInterval: remindInterval,
    };

    saveDataArray.push(newArray);

    localStorage.setItem(`${date}`, JSON.stringify(saveDataArray));
}