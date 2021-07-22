let creatEvent = document.getElementById("create-btn");

var saveDataArray;

// get local Storage items

function getLocalItems() {
    if (localStorage.getItem("Forms") !== null) {
        saveDataArray = JSON.parse(localStorage.getItem("Forms"));
    } else {
        saveDataArray = [];
    }
    console.log(saveDataArray);
}

getLocalItems();

creatEvent.addEventListener("click", saveData);

function saveData(e) {
    e.preventDefault();

    let newArray = {
        title: document.getElementById("titleName").value,
        date: document.getElementById("dateTime").value,
        descriptionValue: document.getElementById("description").value,
        eventType: document.getElementById("typeEvent").value,
        endDate: document.getElementById("end-date").value,
        endTime: document.getElementById("end-time").value,
        remindInterval: document.getElementById("reminder-select").value,
    };

    console.log(newArray);
    saveDataArray.push(newArray);

    localStorage.setItem("Forms", JSON.stringify(saveDataArray));
    console.log(saveDataArray);

    var splitted = document.getElementById("dateTime").value;
    splitted = splitted.split("-");

    splitted = splitted[2].split(":");

    splitted = splitted[0].split("T");
    splitted = parseInt(splitted[0]);

    console.log(splitted);

    /*document.getElementById(
            `${splitted}`
        ).innerHTML += `<div>Title: ${title} </div>`;*/
}