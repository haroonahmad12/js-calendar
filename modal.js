// VARIABLE DECLARATIONS

var crossButton = document.getElementById("close_modal");
var newEventAdder = document.getElementById("new_event");
var newEventModal = document.getElementById("new_event_modal");
var crossButton2 =document.getElementById("close_modal2");

// ADD EVENT LISTENERS

newEventAdder.addEventListener("click", showModal);
crossButton.addEventListener("click", closeNewEvent);
newEventModal.addEventListener("click", showModal);
crossButton2.addEventListener("click",closeNewEvent);

// FUNCTIONS

function showModal() {
    document.getElementById("modal").classList.remove("is_hidden");
    showForm();
}

function showSummary(){
    document.getElementById("summary_events").classList.remove("is_hidden");
    document.getElementById("modal_form_container").classList.add("is_hidden");
}

function showForm(){
    document.getElementById("summary_events").classList.add("is_hidden");
    document.getElementById("modal_form_container").classList.remove("is_hidden");
}

function closeNewEvent() {
    document.getElementById("modal").classList.add("is_hidden");
    document.getElementById("modal_form_container").classList.add("is_hidden");
    document.getElementById("summary_events").classList.add("is_hidden");
}