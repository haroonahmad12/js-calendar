// VARIABLE DECLARATIONS

var crossButton = document.getElementById("close_modal");
var newEventAdder = document.getElementById("new_event");
var newEventModal = document.getElementById("new_event_modal");
var crossButton2 = document.getElementById("close_modal2");
var cancelButton = document.getElementById("cancel-btn");
var createButton = document.getElementById("create-btn");

// ADD EVENT LISTENERS

newEventAdder.addEventListener("click", showModal);
crossButton.addEventListener("click", closeNewEvent);
newEventModal.addEventListener("click", showModal);
crossButton2.addEventListener("click", closeNewEvent);
cancelButton.addEventListener("click", closeNewEvent);

// FUNCTIONS

document
    .getElementById("dateTime")
    .setAttribute("min", new Date().toISOString().substring(0, 16));
document
    .getElementById("end-date")
    .setAttribute("min", new Date().toISOString().substring(0, 10));

function showModal() {
    document.getElementById("modal").classList.remove("is_hidden");
    showForm();
}

function showSummary() {
    document.getElementById("summary_events").classList.remove("is_hidden");
    document.getElementById("modal_form_container").classList.add("is_hidden");
}

function showForm() {
    document.getElementById("summary_events").classList.add("is_hidden");
    document.getElementById("modal_form_container").classList.remove("is_hidden");
}

function closeNewEvent() {
    document.getElementById("modal").classList.add("is_hidden");
    document.getElementById("modal_form_container").classList.add("is_hidden");
    document.getElementById("summary_events").classList.add("is_hidden");
    document.getElementById("add-event-form").reset();
}

function showEventDetails() {}
//Close Modal while clicking outside the modal window

window.onclick = function(event) {
    if (event.target == document.querySelector("#modal")) {
        document.getElementById("modal").classList.add("is_hidden");
        document.getElementById("modal_form_container").classList.add("is_hidden");
        document.getElementById("summary_events").classList.add("is_hidden");
        document.getElementById("add-event-form").reset();
    }
};

document.getElementById("end-date-check").addEventListener("click", checkBox);

function checkBox() {
    var checkbox = document.getElementById("end-date-check");
    document.getElementById("endDateInput").classList.toggle("hide");
}

document.getElementById("reminder-check").addEventListener("click", checkBox1);

function checkBox1() {
    var checkbox = document.getElementById("reminder-check");
    document.getElementById("label-reminder-select").classList.toggle("hide");
}

//ESC keydown Event

window.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        closeNewEvent();
    }
    document.getElementById("add-event-form").reset();
});