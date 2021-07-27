document.addEventListener("click", (e) => {
    if (e.target.matches("[data-date='every_date']")) {
        showModal();
        showSummary();
    }
});

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-button='plus-button']")) {
        showModal();
        showForm();

        var timeInCell = e.target.parentNode;

        timeInCell = timeInCell.getAttribute("id").split("_");

        var yearOfCell = timeInCell[2];
        var monthOfCell = parseInt(timeInCell[1]) + 1;

        monthOfCell = monthOfCell.toString();

        var dayOfCell = timeInCell[0];

        if (monthOfCell.length == 1) {
            monthOfCell = "0" + monthOfCell;
        }

        if (dayOfCell.length == 1) {
            dayOfCell = "0" + timeInCell[0];
        }

        timeInCell = yearOfCell + "-" + monthOfCell + "-" + dayOfCell + "T00:00";

        document.getElementById("dateTime").value = timeInCell;
    }
});