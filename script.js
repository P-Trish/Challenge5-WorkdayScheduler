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

  // Added code to display the current date in the header of the page using dayjs.
  var currentDate = dayjs();
  $('#currentDay').text(currentDate.format('dddd, MMMM DD, YYYY hh:mm A'));

  var currentHour = dayjs().format("H");
  console.log(currentHour);


  var timeBlocksEl = $('#timeBlocks');


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?


  for (var i = 0; i < workHours.length; i++) {
    // hourBlock is the entire row 
    var hourBlock = $('<div class ="row time-block">');

    if (workHoursNum[i] < currentHour) {
      hourBlock.addClass("past");
    }
    else if (workHoursNum[i] == currentHour) {
      hourBlock.addClass("present");
    }
    else { hourBlock.addClass("future"); }

    // hourDiv is the hour for the row from 9:00 AM - 5:00 PM
    var hourDiv = $('<div class="col-2 col-md-1 hour text-center py-3">');


    // task is the middlearea where userInput will be 
    var task = $('<textarea class= "col-8 col-md-10 description" rows="3">');

    // get what's in local storage and check if its empty or not
    var storedData = localStorage.getItem(workHours[i]);
    if (storedData != null) {
      task.val(storedData);
    }



    var saveBtn = $('<button class = "btn saveBtn col-2 col-md-1" aria-label="save">');
    var saveIcon = $('<i class="fas fa-save" aria-hidden="true">');
    // appended all new elements created in js to page 
    timeBlocksEl.append(hourBlock);
    hourBlock.append(hourDiv);
    hourBlock.append(task);
    hourBlock.append(saveBtn);
    hourDiv.text(workHours[i]);
    saveBtn.append(saveIcon);

  }
  // jQuery selector for all rows 
  var timeBlockRow = $('.time-block');

  //  select a save button in the clicked row 
  // the "click" is being assigned to the class .time-block which is any row but is only listening for the 'saveBtn' click 

  timeBlockRow.on("click", ".saveBtn", function (event) {
    event.preventDefault();


    console.log($(this).parent().children().eq(1).val());

    // (this) points to the save button
    var taskRow = $(this).parent().children().eq(0).text();

    var userInput = $(this).parent().children().eq(1).val();
    localStorage.setItem(taskRow, userInput);

  });

});
