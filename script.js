function submitAttendance() {
  // Form URL (make sure this is the correct form response URL)
  var formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeOnoaVJP0ZlFOy2CjRmsAo0Nt4qicX2sm82P7uSUdjk95x7g/formResponse'; // Replace with your form response URL

  // Form data (replace with your actual entry IDs and values)
  var formData = {
    'entry.1580881808': 'Olaniyan Kolade Wisdom', // Replace with actual entry IDs and values
    'emailAddress': 'okolade@nownow.ng', // Corrected entry ID for email
    'entry.781570624': getFormattedDate() // Assuming you have a date field
  };

  Logger.log("Form Data: " + JSON.stringify(formData));

  // Check if today is a public holiday or weekend
  if (isPublicHoliday() || isWeekend()) {
    Logger.log("Today is a public holiday or weekend. No submission needed.");
    return;
  }

  // Submit the form
  var options = {
    'method': 'post',
    'payload': formData,
    'muteHttpExceptions': true
  };

  try {
    var response = UrlFetchApp.fetch(formUrl, options);
    Logger.log("Form submitted successfully: " + response.getContentText());
  } catch (e) {
    Logger.log("Error submitting form: " + e.message);
  }
}

// Function to get the current day of the week formatted as needed
function getFormattedDate() {
  var today = new Date();
  var dayOfWeek = today.getDay();
  var daysOfWeekInWords = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var dayOfWeekInWords = daysOfWeekInWords[dayOfWeek];
 

  return dayOfWeekInWords;
}

// Function to check if today is a public holiday
function isPublicHoliday() {
  var publicHolidays = [
    '01/01/2024', // New Year's Day
    '12/25/2024', // Christmas Day
    // Add more holidays here
  ];

  var today = getFormattedDate();
  return publicHolidays.includes(today);
}

// Function to check if today is a weekend
function isWeekend() {
  var today = new Date();
  var day = today.getDay(); // Sunday - Saturday : 0 - 6
  return (day === 0 || day === 6); // 0 = Sunday, 6 = Saturday
}

// Trigger function to run daily at 8 AM
function createDailyTrigger() {
  ScriptApp.newTrigger('submitAttendance')
    .timeBased()
    .everyDays(1)
    .atHour(8) // 8 AM
    .create();
}


