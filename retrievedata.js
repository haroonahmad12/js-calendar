var nextMonthEvents = document.getElementById("next-month");
var prevMonthEvents = document.getElementById("prev-month");

let retrievedItems;

// --------------ADD EVENT LISTENERS

nextMonthEvents.addEventListener("click", printNextEvents);
prevMonthEvents.addEventListener("click", printPrevEvents);

function printNextEvents() {
    var dias = document.querySelectorAll(".every_date");

    for (let i = 0; i < 42; i++) {
        let allDaysId = dias[i].getAttribute("id");

        //allDaysId.forEach((dayID) => {});

        //retrievedItems = JSON.parse(localStorage.getItem(`${allDaysId}`));

        // document.getElementById(`${allDaysId[i]}`).innerHTML += JSON.parse(
        //     localStorage.getItem(`${allDaysId}`)
        //  );
        console.log(allDaysId);
        console.log(typeof allDaysId);
    }
}

function printPrevEvents() {
    console.log("read correct");
}