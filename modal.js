// VARIABLE DECLARATIONS

var crossButton = document.getElementById("close_modal");
var newEventAdder = document.getElementById("new_event");
var newEventModal = document.getElementById("new_event_modal");
var crossButton2 = document.getElementById("close_modal2");
var cancelButton = document.getElementById("cancel-btn");

// ADD EVENT LISTENERS

newEventAdder.addEventListener("click", showModal);
crossButton.addEventListener("click", closeNewEvent);
newEventModal.addEventListener("click", showModal);
crossButton2.addEventListener("click", closeNewEvent);
cancelButton.addEventListener("click", closeNewEvent);

// FUNCTIONS

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

//Close Modal while clicking outside the modal window

window.onclick = function(event) {
    if (event.target == document.querySelector("#modal")) {
        document.getElementById("modal").classList.add("is_hidden");
        document.getElementById("modal_form_container").classList.add("is_hidden");
        document.getElementById("summary_events").classList.add("is_hidden");
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