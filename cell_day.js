

document.addEventListener("click", (e)=>{
    if (e.target.matches("[data-date='every_date']")){ 
    showModal();
    }
})

document.addEventListener("click", (e)=>{
    if (e.target.matches("[data-button='plus-button']")){ 
    showModal();
    showNewEvent();
    }
})

// document.addEventListener("mouseover", (e)=>{
//     if (e.target.matches("[data-date='every_date']")){ 
        
//         this..classList.toggle("is_hidden")
//     }
// })