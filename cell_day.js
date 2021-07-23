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
    }
});