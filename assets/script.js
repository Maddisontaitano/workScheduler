var addToSchedule= document.querySelector('#add-to-schedule');
var scheduleItem= document.querySelector("#item");
// var schedule= document.querySelector("#schedule");

//saves data to local storage
addToSchedule.addEventListener('submit', function (event) {
    event.preventDefault();
        if (scheduleItem.value.length < 1) return;
        schedule.innerHTML += '<li>' + scheduleItem.value + '</li>';
        localStorage.setItem('scheduleItem', schedule.innerHTML);
    }, false);
  
    var saved = localStorage.getItem('scheduleItem');
  
  //**** */ saves it to a list under the form because i was not sure how to get it in boxes
  if (saved) {
    schedule.innerHTML = saved;
  }
  console.log(saved)

// sets current time
$(document).ready(function () {
    var today= moment();
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a")) ;

})

// variables for background coloring
var rows = document.getElementsByClassName("row");
var currentHour =parseInt(moment().format('H'));


// goes into the id of each time block
Array.from(rows).forEach(row => {
    var
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }


    if (rowHour) {
      // Compares row id to current hour and then sets the color
      if (currentHour === rowHour) {
        setColor(row, "#ff6961");
      } else if ((currentHour < rowHour)) {
        setColor(row, " #77dd77");
      } else if ((currentHour > rowHour)) {
        setColor(row, "#d3d3d3");
      } else {
        setColor(r, "white");
      }
    }
});
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }




   