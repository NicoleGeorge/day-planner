$(document).ready(function() {
  
    // validation

    var test = false;

    // getting times from moment
    var currentTime = moment().format("dddd, MMMM Do YYYY");

    // displaying the time in hader
    var dateHeading = $('#navbar-subtitle');
    dateHeading.text(currentTime);

// SAVE button - using font awesome icon https://fontawesome.com/license
  const saveIcon = "./img/save-regular.svg";

  
// formatting the hous for display




// validation needed - test for after hours 
    
if(test) {
    nowHour24 = 13;
    nowHour12 = 1;
}
 

// testing stuff as I'm going
    // console.log(moment().format("dddd, MMMM Do YYYY"));

    // console.log(moment());
  });