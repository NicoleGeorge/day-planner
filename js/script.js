$(document).ready(function() {
  
  // test flag
  var test = false;

  // get times from moment
  var now = moment().format('MMMM Do YYYY');

  // commented out for test in non-standard hours
  var nowHour24 = moment().format('H');
  var nowHour12 = moment().format('h');

  // set times for tesitng after hours
  if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

  var $dateHeading = $('#navbar-subtitle');
  $dateHeading.text(now);
  
  // using font awesome icon https://fontawesome.com/license

  var saveIcon = "./images/save-regular.svg"; 

  // creating the day planner by row for set workplace hours

  for (var hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
    var index = hour - 9;
    
    //creating the row components for the calendar
    // starting with the timeField

    // START: making the time field section

    var $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index', hour);
  
    // creating the time field section
    var $col2TimeDiv = $('<div>');
    $col2TimeDiv.addClass('col-md-2');
  
    // create timeField element
    var $timeBoxSpn = $('<span>');
    // can use this to get value
    $timeBoxSpn.attr('class','timeField');
    
    // formatting hours for display
    var displayHour = 0;
    var ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    
    // displaying the timeField section with the workplace set time
    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    // add the time to col-md-2 - timeField
    $rowDiv.append($col2TimeDiv);
    $col2TimeDiv.append($timeBoxSpn);
    
    // END: timeField section done
  }
    console.log(displayHour);
});