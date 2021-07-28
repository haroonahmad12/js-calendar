function alertBox() {
    let dayNow = new Date();

    dayNow = new Date(dayNow.setHours(dayNow.getHours() + 2));
    dayNow = dayNow.toISOString().substring(0, 16);

    for (let i = 0; i < saveDataArray.length; i++) {
        if (saveDataArray[i].reminderDate !== undefined) {
            let alarmdate = saveDataArray[i].reminderDate;

            let alarmInterval = parseInt(saveDataArray[i].remindInterval);
            alarmdate = new Date(alarmdate);

            alarmdate = new Date(
                alarmdate.setMinutes(alarmdate.getMinutes() - alarmInterval)
            );
            alarmdate = new Date(alarmdate.setHours(alarmdate.getHours() + 2));
            alarmdate = alarmdate.toISOString().substring(0, 16);

            /*let alertModal = `<div class="modal" id="modal_event">
            <div class="modal_summary" id="modal_event1">
                
                <h1>You Have an Event in ${alarmInterval} Minutes</h1>
                
                
                </div>
            </div>`;
*/
            if (alarmdate === dayNow) {
                alert("You Have An Event");
            }
        }
    }
}

alertBox();
setInterval(alertBox, 10000);

/*function removeAlertModal() {
    if (document.getElementById("modal_event") !== null) {
        document.getElementById("modal_event").remove();
    }
}
removeAlertModal();
setInterval(removeAlertModal, 7000);*/