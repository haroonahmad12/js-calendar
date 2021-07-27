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

            if (alarmdate === dayNow) {
                alert("YOU HAVE AN EVENT");
            }
        }
    }
}
alertBox();
setInterval(alertBox, 10000);