//declare Variables
var newEventAdder = document.getElementById("newEvent");
let crossButton = document.getElementById("closeEvent");

// Add Event Button, Display Modal Screen

newEventAdder.addEventListener("click", showModal);

function showModal() {
    document.querySelector(".modal").style.display = "flex";
}

// Close Pop up button

crossButton.addEventListener("click", closeNewEvent);

function closeNewEvent() {
    document.querySelector(".modal").style.display = "none";
}

//Close Pop up function End

//Click outside modal
window.onclick = function(event) {
    if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
    }
};

//End Function click outside modal

// Modal Cancel Key

let cancelKey = document.getElementById("cancel-btn");

cancelKey.addEventListener("click", clearClose);

function clearClose() {
    let modalStuff = document.querySelector(".modalObjects");

    modalStuff.reset();
}

//Modal Cancel Key function End but it needs to be repeated for the cancel keys in each grid modal