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
  var saveIcon = ".img/save-regular.svg"; 

  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  if (test) {console.log(storedPlans); }

  // Once plans are retrieved from localStorage, update the plan array
  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } 
  else {

    // prompts for the user with important info :)
    planTextArr = new Array(9);
    planTextArr[4] = "LUNCH TIME!!";
  }

  if (test) { console.log("full array of plned text",planTextArr); }

   //creating the row components for the calendar
  // setting variables re planner element
  var $plannerDiv = $('#plannerContainer');
  // clear existing elements
  $plannerDiv.empty();

  if (test) { console.log("current time",nowHour12); }

  // creating the day planner by row for set workplace hours

  for (var hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
    var index = hour - 9;
    

    // starting with the timeField

    // START: making the container section

    var $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index', hour);
  
    // creating the time field section
    var $col2TimeDiv = $('<div>');
    $col2TimeDiv.addClass('col-md-2');
  
    // create timeField element
    var $timeBoxSpn = $('<span>');
    $timeBoxSpn.attr('class','timeField');
    
    // formatting hours for display
    var displayHour = 0;
    var ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } 
    else {
      displayHour = hour;
      ampm = "am";
    }
    
    // displaying the timeField section with the workplace set time
    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    // add the time to col-md-2 - timeField
    $rowDiv.append($col2TimeDiv);
    $col2TimeDiv.append($timeBoxSpn);
    
    // END: timeField section done

    // START: creating the scheduler inputs section

    var $dailyPlanSpn = $('<input>');

    $dailyPlanSpn.attr('id',`input-${index}`);
    $dailyPlanSpn.attr('hour-index',index);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');

    // accessing index from data array for hour 
    $dailyPlanSpn.val( planTextArr[index] );
    
    // create col-md-9 to set the width
    var $col9IptDiv = $('<div>');
    $col9IptDiv.addClass('col-md-9');

    // adding col width and row component to schedule input section of the row
    $rowDiv.append($col9IptDiv);
    $col9IptDiv.append($dailyPlanSpn);

    // START: creating the save button section
    var $col1SaveDiv = $('<div>');
    $col1SaveDiv.addClass('col-md-1');

    var $saveBtn = $('<i>');
    $saveBtn.attr('id',`saveid-${index}`);
    $saveBtn.attr('save-id', index);
    $saveBtn.attr('class',"far fa-save saveIcon");
    
    // added col width and button output section to the row

    $rowDiv.append($col1SaveDiv);
    $col1SaveDiv.append($saveBtn);
    // END: completed the save button section

    // set row color based on time
    updateRowColor($rowDiv, hour);
    
    // adding the newly created row, with the 3 sections, to the planner container
      $plannerDiv.append($rowDiv);
  };

  // function(): made to update row color based on time
  function updateRowColor ($hourRow,hour) { 

    if (test) { console.log("rowColor ", nowHour24, hour); }

    if ( hour < nowHour24) {
      if (test) { console.log("lessThan"); }
      $hourRow.css("background-color", "lightgrey")
    } 
    else if ( hour > nowHour24) {
      if (test) 
      $hourRow.css("background-color", "lightgreen")
    } 
    else {
      if (test) 
      $hourRow.css("background-color", "tomato")
    }
  };

  // START: local storage section
  // onclick function to listen for user clicks on planning scheduler area
  $(document).on('click', 'i', function(e) {
    e.preventDefault();  

    if (test) { console.log('click pta before ' + planTextArr); }

    var $index = $(this).attr('save-id');

    var inputId = '#input-'+ $index;
    var $value = $(inputId).val();

    planTextArr[$index] = $value;

    if (test) //{ console.log('value ', $value); }
    if (test) //{ console.log('index ', $index); }
    if (test) //{ console.log('click pta after ' + planTextArr); }

    // remove shawdow pulse class
    $(`#saveid-${$index}`).removeClass('shadowPulse');
    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  });  
  
  // color change function of save button when text is added
  $(document).on('change', 'input', function(event) {
    event.preventDefault();  
    if (test) //{ console.log('onChange'); }
    if (test) //{ console.log('id', $(this).attr('hour-index')); }

    // neeed to check for save button

    var i = $(this).attr('hour-index');

    // add shawdow pulse class
    $(`#saveid-${i}`).addClass('shadowPulse');
  });

    // console.log(test);
});