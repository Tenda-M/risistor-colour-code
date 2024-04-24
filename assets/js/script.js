// Declare a global variable to store the result
let Result = 0;
let Tolerance = 0;
let Minimum = 0;
let Maximum = 0;

// ***************** Function to check the radio button and show/hide select elements accordingly *****************/
/*function check() {
  const selectThreeContainer = document.getElementById("band-three");
  const selectFourContainer = document.getElementById("band-four");

  console.log("Checking band settings...");

  // Hide both third and fourth selectors initially
  selectThreeContainer.style.display = "none";
  selectFourContainer.style.display = "none";
  document.getElementById("select-three").removeAttribute("required");
  document.getElementById("select-four").removeAttribute("required");

  // if 4-band-button radio button is checked, Check which band is selected and adjust visibility and requirements
  if (document.getElementById("4-band-button").checked) {
    console.log("Setting for 4-band...");
    // Already hidden, just log the action
    console.log("4-band: Both select-three and select-four are hidden and not required.");

    // if 5-band-button radio button is checked, Check which band is selected and adjust visibility and requirements
  } else if (document.getElementById("5-band-button").checked) {
    console.log("Setting for 5-band...");
    selectThreeContainer.style.display = "block";
    document.getElementById("select-three").setAttribute("required", true);
    console.log("5-band: select-three is visible and required; select-four remains hidden and not required.");

    // if 6-band-button radio button is checked, Check which band is selected and adjust visibility and requirements
  } else if (document.getElementById("6-band-button").checked) {
    console.log("Setting for 6-band...");
    selectThreeContainer.style.display = "block";
    selectFourContainer.style.display = "block";
    document.getElementById("select-three").setAttribute("required", true);
    document.getElementById("select-four").setAttribute("required", true);
    console.log("6-band: Both select-three and select-four are visible and required.");
  }
}*/

function check() {
  const selectThreeContainer = document.getElementById("band-three");
  const selectFourContainer = document.getElementById("band-four");

  console.log("Checking band settings...");

  // Reset the calculated values whenever band selection changes
  resetDisplayValues();  // Resetting display values to clear any previous calculations

  // Hide both third and fourth selectors initially
  selectThreeContainer.style.display = "none";
  selectFourContainer.style.display = "none";
  document.getElementById("select-three").removeAttribute("required");
  document.getElementById("select-four").removeAttribute("required");

  if (document.getElementById("4-band-button").checked) {
    console.log("Setting for 4-band...");
    // Log action, no need to show or require additional selectors
  } else if (document.getElementById("5-band-button").checked) {
    console.log("Setting for 5-band...");
    selectThreeContainer.style.display = "block";
    document.getElementById("select-three").setAttribute("required", true);
  } else if (document.getElementById("6-band-button").checked) {
    console.log("Setting for 6-band...");
    selectThreeContainer.style.display = "block";
    selectFourContainer.style.display = "block";
    document.getElementById("select-three").setAttribute("required", true);
    document.getElementById("select-four").setAttribute("required", true);
  }
}


// ************************ Function to perform the calculation **************************//
function calculateAnswer() {
  // declare local variable for the selected values of the bands
  let selectOne = document.getElementById('select-one').value;
  let selectTwo = document.getElementById('select-two').value;
  let selectThree = document.getElementById('select-three').value;
  let selectFour = document.getElementById('select-four').value;
  let selectFive = document.getElementById('select-five').value;

  // Formula for All the bands selection,// Converts numbers to strings and concatenates them
  if (document.getElementById("4-band-button").checked == true) {
    Result = (parseInt(selectOne).toString() + parseInt(selectTwo).toString()) * parseInt(selectFive);
  }
  if (document.getElementById("5-band-button").checked == true) {
    Result = (parseInt(selectOne).toString() + parseInt(selectTwo).toString() + parseInt(selectThree).toString()) * parseInt(selectFive);
  }
  if (document.getElementById("6-band-button").checked == true) {
    Result = (parseInt(selectOne).toString() + parseInt(selectTwo).toString() + parseInt(selectThree).toString() + parseInt(selectFour).toString()) * parseInt(selectFive);
  }
}

// tolerance calculations
function calculateTolerance() {
  if (document.getElementById("select-tolerance").value === "Gold") {
    Tolerance = Result * 0.05;
    Minimum = Result - Tolerance;
    Maximum = Result + Tolerance;
  }
  else if (document.getElementById("select-tolerance").value === "Silver") {
    Tolerance = Result * 0.1;
    Minimum = Result - Tolerance;
    Maximum = Result + Tolerance;
  }

  else {
    Tolerance = 0; // Default value if no tolerance is selected
    Minimum = Result;
    Maximum = Result;
  }
}
/***************** Function to display the calculated answer ********************************/

function showCalculatedAnswer() {
  // Check if all dropdowns have been selected
  if (validateDropdowns()) {
    // Call the calculateAnswer function to perform the calculation
    calculateAnswer();

     // Logging for debugging
     console.log("Calculation results:", {
      Result: Result,
      Tolerance: Tolerance,
      Minimum: Minimum,
      Maximum: Maximum
    });
    // Display the result
    document.getElementById("result").innerText = " The calculated result is: " + Result + " Ohms";

    // Call the calculateTolerance function to calculate the tolerance
    calculateTolerance();
    document.getElementById("tolerance").innerText = "The calculated tolerance is +/- : " + Tolerance + "Ohms";
    document.getElementById("minimum").innerText = "The minimum resistor is : " + Minimum + "Ohms";
    document.getElementById("maximum").innerText = "The maximum resistor is : " + Maximum + "Ohms";
  } else {
    // If dropdowns are not all selected, display an alert or handle the error as desired
    alert("Please select values from all dropdown menus before calculating.");
  }
}

// this function is responsible for checking if all visible dropdowns that have been selected.//
function validateDropdowns() {
  let isValid = true;
  console.log("Validating dropdown selections...");

  document.querySelectorAll("select").forEach(select => {
      let style = window.getComputedStyle(select);
      if (style.display !== "none" && select.required) {
          if (select.value === "colour band") {
              isValid = false;
              console.log(`Validation failed on: ${select.id}, Value: ${select.value}`);
          } else {
              console.log(`Validation passed on: ${select.id}, Value: ${select.value}`);
          }
      } else {
          console.log(`Skipped validation on: ${select.id}, Display: ${style.display}, Required: ${select.required}`);
      }
  });
  return isValid;
}


//**************** Page popup box ******************//
// an event listener to the element that will trigger the popup
document.querySelector(".popup").style.display = "none";
document.getElementById("popupTrigger").addEventListener("click", function () {
  // Show overlay
  //document.getElementById("overlay").style.display = "block";
  // Show popup
  document.querySelector(".popup").style.display = "block";
});
//function adds an event listener to the close button. When the close button is clicked, it hides the popup window by setting its display property to "none".
document.querySelector("#close").addEventListener("click", function () {
  // Hide overlay
  //document.getElementById("overlay").style.display = "none";
  // Hide popup
  document.querySelector(".popup").style.display = "none";
})

//******************** Resistor image *******************//
// Function to update the resistor image
/*function updateResistorImage() {
  // Array of IDs for each band element
  const bandIds = ['band1', 'band2', 'band3', 'band4', 'band5', 'band6'];
  // Array of select element IDs corresponding to each band
  const selectIds = ['select-one', 'select-two', 'select-three', 'select-four', 'select-five', 'select-tolerance'];

  // Get the selected colors from the dropdown menus
  let selectedColors = selectIds.map(id => {
    const selectElement = document.getElementById(id);
    // Handle cases where the select element might be hidden and thus not part of the current band setting
    return selectElement ? selectElement.options[selectElement.selectedIndex].dataset.color : '';
  });

  // Map colors to their corresponding CSS classes
  const colorClasses = {
    'black': 'band-black',
    'brown': 'band-brown',
    'red': 'band-red',
    'orange': 'band-orange',
    'yellow': 'band-yellow',
    'green': 'band-green',
    'blue': 'band-blue',
    'violet': 'band-violet',
    'grey': 'band-grey',
    'white': 'band-white',
    'gold': 'band-gold',
    'silver': 'band-silver'
  };

  // Set the background color of each band based on the selected color
  for (let i = 0; i < bandIds.length; i++) {
    let band = document.getElementById(bandIds[i]);
    if (band && selectedColors[i]) { // Check if the band element exists and color is selected
      band.className = 'band ' + (colorClasses[selectedColors[i]] || 'default-class');
    }
  }
}*/

// Function to update the resistor image
function updateResistorImage() {
  const bandIds = ['band1', 'band2', 'band3', 'band4', 'band5', 'band6'];
  const selectIds = ['select-one', 'select-two', 'select-three', 'select-four', 'select-five', 'select-tolerance'];

  bandIds.forEach((bandId, index) => {
      const band = document.getElementById(bandId);
      const select = document.getElementById(selectIds[index]);
      const colorValue = select.options[select.selectedIndex].getAttribute('data-color');
      if (colorValue) {
          band.style.backgroundColor = colorValue; // Use the actual color value or a mapping if necessary
      } else {
          band.style.backgroundColor = 'transparent'; // Default to transparent if no color selected
      }
  });
}
//*****************Local storage*******************//

// Function to save current settings to local storage
function saveToLocalStorage() {
  const settings = {
      bandOne: document.getElementById('select-one').value,
      bandTwo: document.getElementById('select-two').value,
      // Include other bands and selections as needed
      bandThree: document.getElementById('select-three').value,
      bandFour: document.getElementById('select-four').value,
      bandFive: document.getElementById('select-five').value,
      tolerance: document.getElementById('select-tolerance').value
  };
  localStorage.setItem('resistorSettings', JSON.stringify(settings));
  alert("Settings saved!");
}

// Function to load settings from local storage
function loadFromLocalStorage() {
  const settings = JSON.parse(localStorage.getItem('resistorSettings'));
  if (settings) {
      document.getElementById('select-one').value = settings.bandOne;
      document.getElementById('select-two').value = settings.bandTwo;
      // Set other bands and selections as well
      document.getElementById('select-three').value = settings.bandThree;
      document.getElementById('select-four').value = settings.bandFour;
      document.getElementById('select-five').value = settings.bandFive;
      document.getElementById('select-tolerance').value = settings.tolerance;
      updateResistorImage(); // Update the display according to new settings
      alert("Settings loaded!");
  } else {
      alert("No saved settings found.");
  }
}

// Function to clear settings from local storage
function clearLocalStorage() {
  localStorage.removeItem('resistorSettings');
  alert("Settings cleared!");
  // Optionally reset the dropdowns to their default values
  document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
  updateResistorImage(); // Refresh the display to default image

   // Remove the settings from local storage
   localStorage.removeItem('resistorSettings');
   alert("Settings cleared!");

   // Reset all dropdowns to their default state
   resetDropdowns();

   // Clear the visual display of the resistor bands
   clearResistorBands();

   // Optionally clear the display of calculated values
   resetDisplayValues();
}
/**
 // Clear settings from local storage and update UI accordingly
function clearLocalStorage() {
    localStorage.removeItem('resistorSettings');
    resetDropdownsAndClearImage(); // Reset selections and clear image
    alert("Settings cleared!");
}
 */
// Function to reset display values
function resetDisplayValues() {
  document.getElementById("result").innerText = "Calculated value: ";
  document.getElementById("tolerance").innerText = "Tolerance value: ";
  document.getElementById("minimum").innerText = "Minimum value: ";
  document.getElementById("maximum").innerText = "Maximum value: ";
}

/******* Function to reset all dropdowns to their default "Colour band" option **********/
// Function to reset all dropdowns to their default "Colour band" option and re-hook the event listeners
function resetDropdowns() {
  document.querySelectorAll('select').forEach(select => {
      select.selectedIndex = 0;  // Reset each select to the first option
  });
  setupEventListeners();  // Re-establish the event listeners for dynamic functionality
  updateResistorImage();  // Update the image to reflect the reset
}

/********** Function to clear all resistor bands visually **************/
// Function to clear all resistor bands visually
function clearResistorBands() {
  // Assuming there are 6 bands to clear
  for (let i = 1; i <= 6; i++) {
    const band = document.getElementById('band' + i);
    band.style.backgroundColor = 'transparent'; // Set to transparent or any default color
  }
}


/********** Function to ensure update hooks are correctly established*************/
// Add event listeners to selects and radio buttons for consistent functionality
function setupEventListeners() {
  document.querySelectorAll('select').forEach(select => {
      select.addEventListener('change', updateResistorImage); // Ensure image updates on every change
  });

  document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', function() {
          check(); // Adjust visibility of selectors based on band choice
          resetDropdownsAndClearImage(); // Reset selections and clear image whenever band choice changes
      });
  });
}

// Reset dropdowns to their default state and clear the resistor image
function resetDropdownsAndClearImage() {
  document.querySelectorAll('select').forEach(select => {
      select.selectedIndex = 0; // Reset each select to the default option
  });
  updateResistorImage(); // Immediately reflect the reset state in the image
}


// Initial setup call to configure everything when the page loads
setupEventListeners();  // Set up event listeners initially
check();  // Initial check to set up UI correctly based on default radio selection
 /**
 // Set up everything when the page loads
window.onload = function() {
    setupEventListeners(); // Set up event listeners on page load
    check(); // Initial UI setup based on default or stored settings
};
  */

// Add event listeners to the radio buttons for band selection
document.querySelectorAll('input[name="band-selection"]').forEach(radio => {
  radio.addEventListener('change', check);
});