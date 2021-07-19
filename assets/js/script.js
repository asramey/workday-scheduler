// Get date/time
var currentTime = moment();

// Array of possible time slots
var hourList12 = ["9","10","11","12","1","2","3","4","5"];
var hourList24 = ["09","10","11","12","13","14","15","16","17"];

// Set header to match current date
var headerDate = currentTime.format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = headerDate;

// Generate time blocks
for (var i = 0; i < hourList24.length; i++) {
    // Time block divs
    var newTimeBlock = document.createElement("div");

    // Compare current time to times on list, and change styles accordingly
    if (hourList24[i] === currentTime.format("HH")) {
        newTimeBlock.className = "time-block row present";
    }
    else if (hourList24[i] > currentTime.format("HH")) {
        newTimeBlock.className = "time-block row future";
    }
    else {
        newTimeBlock.className = "time-block row past";
    };

    // Left side time display
    var timeDisplay = document.createElement("div");
    timeDisplay.className = "hour col";
    if (hourList12[i] < 12) {
        timeDisplay.textContent = hourList12[i] + " AM";
    } else {
        timeDisplay.textContent = hourList12[i] + " PM"
    }

    // Text area
    var textArea = document.createElement("textarea");
    textArea.className = "description col-sm-10";
    textArea.id = "hour" + hourList12[i];

    // Save button
    var saveButton = document.createElement("button");
    saveButton.className = "saveBtn col-sm-1";
    saveButton.setAttribute("onclick", "saveData();");

    // Append time block to container, then contents to time block
    document.querySelector("#time-block-container").appendChild(newTimeBlock);
    newTimeBlock.appendChild(timeDisplay);
    newTimeBlock.appendChild(textArea);
    newTimeBlock.appendChild(saveButton);
};
// Save function when button is clicked
var toDoList = [];
toDoList[0] = document.querySelector("#hour9");

var saveData = function() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
};


// Load from localStorage 

