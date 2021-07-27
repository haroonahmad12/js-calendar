//SETTING ADD EVENT LISTENER TO ALL CALENDAR EVENTS ADDED

function recieveAllEvents() {
    var addedEvents;
    addedEvents = document.getElementsByClassName("calendar-event");
    for (let i = 0; i < addedEvents.length; i++) {
        addedEvents[i].addEventListener("click", showDetails);
    }
}
recieveAllEvents();

// WE HAD TO PUT IT IN A FUNCTION BECAUSE THIS FUNCTIONALITY NEEDS TO REMAIN WHEN WE CHANGE MONTHS,
//SO ADDING THE MONTHS TO NEXT AND PREV BUTTONS SOLVED THE PROBLEM

function showDetails() {
    // Find the Event in LocalStorage and Get Data
    let findID = parseInt(event.target.getAttribute("id")); //ID of event we are clicking

    var eventTitle;
    var eventDate;
    var eventTime;
    var eventDescription;
    var eventType;
    var endDate;
    var remindInterval;

    //GET DATA FROM LOCALSTORAGE

    for (let i = 0; i < saveDataArray.length; i++) {
        if (saveDataArray[i].delId == findID) {
            //Get Data from the LocalStorage
            eventTitle = saveDataArray[i].title;
            eventDate = saveDataArray[i].date;
            eventTime = saveDataArray[i].time;
            eventDescription = saveDataArray[i].description;
            eventType = saveDataArray[i].eventType;
            endDate = saveDataArray[i].endDate;
            endTime = saveDataArray[i].endTime;
            remindInterval = saveDataArray[i].remindInterval;
        }
    }

    //Create Modal when clicked on an event to show its details
    var eventModal = document.createElement("div");
    var body = document.getElementsByTagName("body")[0];
    eventModal.classList.add("modal");
    eventModal.setAttribute("id", "event-modal");

    body.prepend(eventModal);

    eventModal.innerHTML = `<div class="modal_summary" id="modal_form_container">
    <button class="close" id="close_modal3">&times;</button>
  <div class = "event-objects">        
<span class = "event-title"> Title: <b>  ${eventTitle} </b></span>
<span class = "event-title"> Event Date: <b>  ${eventDate} </b></span>
<span class = "event-title"> Time: <b>  ${eventTime} </b></span>
<span class = "event-title"> Description: <b>  ${eventDescription} </b></span>
<span class = "event-title"> Type: <b>  ${eventType} </b></span>
<span class = "event-title"> End Date: <b>  ${endDate} </b></span>
<span class = "event-title"> End Time: <b>  ${endTime} </b></span>
<span class = "event-title"> Remind Interval: <b>  ${remindInterval} Minutes Before the event Starts </b></span>
</div>

<button class="add_event" id= "delete">Delete Event</button>

   
</div>
`;
    //Close Modal and Delete the newly created Div
    var eventModalCrossBtn = document.getElementById("close_modal3");

    eventModalCrossBtn.addEventListener("click", closeModal);

    function closeModal() {
        document.getElementById("event-modal").remove();
    }

    //ESC Keyclose Function
    window.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
            if (document.getElementById("event-modal") !== null) {
                closeModal();
            }
        }
    });

    //delete button functionality

    document.getElementById("delete").addEventListener("click", deleteEvent);

    function deleteEvent() {
        saveDataArray = saveDataArray.filter((event) => event.delId != findID);

        localStorage.setItem(`CalendarEvents`, JSON.stringify(saveDataArray));
        //Close Modal and remove event from Calendar Physically (still saved in local Storage)
        document.getElementById("event-modal").remove();
        document.getElementById(findID).remove();
    }
}