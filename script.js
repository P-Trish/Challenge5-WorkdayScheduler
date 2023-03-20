const workHours = [
"9:00 AM",
"10:00 AM",
"11:00 AM",
"12:00 PM",
"1:00 PM",
"2:00 PM",
"3:00 PM",
"4:00 PM",
"5:00 PM"
];

const workHoursNum = [
  9, 10, 11, 12, 13, 14, 15, 16, 17
];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // Added code to display the current date in the header of the page.

  var currentDate = dayjs();
  $('#currentDay').text(currentDate.format('dddd, MMMM DD, YYYY hh:mm A'));

  // var currentHour = dayjs().format("H");
  var currentHour = 10;
  console.log(currentHour);

  var timeBlocksEl= $('#timeBlocks');
  

   // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?


for (var i=0; i< workHours.length; i++) {
  var hourBlock = $('<div class ="row time-block">');
  hourBlock.addClass("");

if (workHoursNum [i]< currentHour) {
  hourBlock.addClass("past");
}
else if (workHoursNum [i] == currentHour) {
  hourBlock.addClass("present");
}
else {hourBlock.addClass("future");}


  var hourDiv = $('<div class="col-2 col-md-1 hour text-center py-3">');
  var task = $('<textarea class= "col-8 col-md-10 description" rows="3">');
  var saveBtn = $('<button class = "btn saveBtn col-2 col-md-1" aria-label="save">');
  var saveIcon = $('<i class="fas fa-save" aria-hidden="true">');
  timeBlocksEl.append(hourBlock);
  hourBlock.append(hourDiv);
  hourBlock.append(task);
  hourBlock.append(saveBtn);
  hourDiv.text(workHours[i]);
  saveBtn.append(saveIcon);

  // saveBtn.on("click", function (event) {
  //   event.preventDefault();
  
  

  //   var userInput = "";
  //   localStorage.setItem("task", userInput);
  
  //   // task (userInput)
  //   // userInput written to the task var to be saved in local storage
  //   });
    

  }
  
  var timeBlockRow = $('.time-block');

  timeBlockRow.on("click", ".saveBtn", function (event) {
    event.preventDefault();
  
    console.log($( this ).parent().children().eq(0).text());

    var taskRow = $( this ).parent().children().eq(0).text();

    var userInput = "";
    localStorage.setItem(taskRow, userInput);
  
  
    // userInput written to the task var to be saved in local storage
    });
    

  


	

 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  //
 
});
