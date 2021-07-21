// --------------VARIABLE DECLARATIONS


// MONTHS AND DAYS ARRAYS
var monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var daysNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

// CURRENT DATE

var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

// DATES

var days = document.getElementById("days");
var month = document.getElementById("month");
var year = document.getElementById("year");

var lastDay;
var lastCell 

// BUTTONS

var nextMonth = document.getElementById("next-month");
var prevMonth = document.getElementById("prev-month");

// --------------ADD EVENT LISTENERS

nextMonth.addEventListener("click", followingMonth);
nextMonth.addEventListener("click", monthBeginning)
prevMonth.addEventListener("click", previousMonth);

month.innerHTML = monthsNames[currentMonth];
year.innerHTML = currentYear.toString();

printNewMonth(currentMonth);

function monthBeginning(){
     
    let beginning = new Date(currentYear, currentMonth, 1);
    return beginning.getDay()
        
}

function createMonth(month){
        
        for(let j = monthBeginning(currentMonth); j>0; j--){
            days.innerHTML += `<div class='every_date previous_month_date' id='previous_month_date'>${(lastDay-(j-1))}<div>`;
        }

        for(let i=1; i<=42;i++){
            
            if(i===currentDay && currentMonth === new Date().getMonth()){
            days.innerHTML += `<div class='every_date today_date' id='today_date'>${i}<div>`;
            }
            else if(i<=lastDay){
            days.innerHTML += `<div class='every_date' id='every_date'>${i}<div>`;
            }
            
            else if(i <=lastDay+1){
                console.log(lastCell);
                for(let j = 1; j<= lastCell; j++)
                days.innerHTML += `<div class='every_date next_month_date' id='every_date'>${j}<div>`;
             }
        }
}

function followingMonth(){

    if(currentMonth!==11){
        currentMonth++;

    }
    else{
        currentMonth=0;
        currentYear++;
    }
    
    printNewMonth();

}

function previousMonth(){

    if(currentMonth!==0){
        currentMonth--;

    }
    else{
        currentMonth=11;
        currentYear--;
    }

    printNewMonth();
}

function printNewMonth(){

    currentDate.setFullYear(currentYear,currentMonth,currentDay);
    month.innerHTML = monthsNames[currentMonth];
    year.innerHTML = currentYear.toString();

    lastDay = new Date(currentYear, currentMonth+1, 0).getDate();
    
    lastCell = 42 - (lastDay + monthBeginning(currentMonth))
    days.innerHTML="";
    createMonth(currentMonth);
    
    

}

