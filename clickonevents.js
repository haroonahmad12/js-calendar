let addedEvents = document.getElementsByClassName("calendar-event");

for (let i = 0; i < addedEvents.length; i++) {
    addedEvents[i].addEventListener("click", showDetails);
}

function showDetails() {
    // Find the Event in LocalStorage and Get Data
    let findID = parseInt(event.target.getAttribute("id"));
    var eventTitle;
    var eventDate;
    var eventTime;
    var eventDescription;
    var eventType;
    var endDate;
    var remindInterval;

    for (let i = 0; i < retrieveData.length; i++)
        if (retrieveData[i].delId == findID) {
            eventTitle = retrieveData[i].title;
            eventDate = retrieveData[i].date;
            eventTime = retrieveData[i].time;
            eventDescription = retrieveData[i].description;
            eventType = retrieveData[i].eventType;
            endDate = retrieveData[i].endDate;
            remindInterval = retrieveData[i].remindInterval;
        }

        //Create Modal when clicked on an event to show its details
    var eventModal = document.createElement("div");
    var body = document.getElementsByTagName("body")[0];
    eventModal.classList.add("modal");
    eventModal.setAttribute("id", "event-modal");

    body.prepend(eventModal);

    eventModal.innerHTML = `<div class="modal_objects" id="modal_form_container">
    <button class="close" id="close_modal3">&times;</button>
  <div class = "event-objects">        
<span class = "event-title"> Title: <b>  ${eventTitle} </b></span>
<span class = "event-title"> Event Date: <b>  ${eventDate} </b></span>
<span class = "event-title"> Time: <b>  ${eventTime} </b></span>
<span class = "event-title"> Description: <b>  ${eventDescription} </b></span>
<span class = "event-title"> Type: <b>  ${eventType} </b></span>
<span class = "event-title"> End Date: <b>  ${endDate} </b></span>
<span class = "event-title"> Remind Interval: <b>  ${remindInterval} </b></span>
</div>

<button class="cancel" id= "delete">Delete Event</button>

   
</div>
    `;

    //Close Modal and Delete the newly created Div
    var eventModalCrossBtn = document.getElementById("close_modal3");
    eventModalCrossBtn.addEventListener("click", () => {
        document.getElementById("event-modal").remove();
    });
}