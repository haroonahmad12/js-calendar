//Creat Event/ Local Storage

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
        date: document.getElementById("date").value,
        description: document.getElementById("description").value,
        eventType: document.getElementById("typeEvent").value,
    };

    console.log(newArray);
    saveDataArray.push(newArray);

    localStorage.setItem("Forms", JSON.stringify(saveDataArray));
    console.log(saveDataArray);
}