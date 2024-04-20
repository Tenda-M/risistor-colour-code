
// Declare a global variable to store the result
let Result = 0;
let Tolerance = 0;
let Minimum = 0;
let Maximum = 0;

// ***************** Function to check the radio button and show/hide select elements accordingly *****************/
/*function check() {

  // Get the select container for the third band
  let selectThreeContainer = document.getElementById("band-three");
  let selectFourContainer = document.getElementById("band-four");

  console.log("Checking band settings...");

  // if 4-band-button radio button is checked
  if (document.getElementById("4-band-button").checked) {
    console.log("Setting for 4-band...");
    // Hide select element for third band
    selectThreeContainer.style.display = "none";
    selectFourContainer.style.display = "none";
    // Remove the "required" attribute from select-three and select-four
    document.getElementById("select-three").removeAttribute("required");
    document.getElementById("select-four").removeAttribute("required");
    console.log("4-band: select-three and select-four have removed required.");
  
    // Hide select element for third band
    selectThreeContainer.classList.add("hidden");
// Hide select element for fourth band
   selectFourContainer.classList.add("hidden");
console.log("4-band: select-three and select-four are hidden ");
  }

  // if 5-band-button radio button is checked
  else if (document.getElementById("5-band-button").checked) {
    console.log("Setting for 5-band...");
    // Show select element for third band
    selectThreeContainer.style.display = "block";
    selectFourContainer.style.display = "none";
    // Add the "required" attribute to select-three and remove it from select-four
    document.getElementById("select-three").setAttribute("required", true);
    document.getElementById("select-four").removeAttribute("required");
    console.log("5-band: select-three is visible add required while select-four is remove required");

     // Hide select element for third band
     selectThreeContainer.classList.remove("hidden");
     // Hide select element for fourth band
     selectFourContainer.classList.add("hidden");
     console.log("4-band: select-three removed hidden and select-four is hidden ");
  }
  // if 6-band-button radio button is checked
  else if (document.getElementById("6-band-button").checked) {
    console.log("Setting for 6-band...");
    // Show select element for third band
    selectThreeContainer.style.display = "block";
    selectFourContainer.style.display = "block";
    // Add the "required" attribute to both select-three and select-four
    document.getElementById("select-three").setAttribute("required", true);
    document.getElementById("select-four").setAttribute("required", true);
    console.log("5-band: select-three is visible add required; select-four is hidden and add required");
  }
}*/

function check() {
  const selectThreeContainer = document.getElementById("band-three");
  const selectFourContainer = document.getElementById("band-four");

  console.log("Checking band settings...");

  // Hide both third and fourth selectors initially
  selectThreeContainer.style.display = "none";
  selectFourContainer.style.display = "none";
  document.getElementById("select-three").removeAttribute("required");
  document.getElementById("select-four").removeAttribute("required");

  // Check which band is selected and adjust visibility and requirements
  if (document.getElementById("4-band-button").checked) {
    console.log("Setting for 4-band...");
    // Already hidden, just log the action
    console.log("4-band: Both select-three and select-four are hidden and not required.");
  } else if (document.getElementById("5-band-button").checked) {
    console.log("Setting for 5-band...");
    selectThreeContainer.style.display = "block";
    document.getElementById("select-three").setAttribute("required", true);
    console.log("5-band: select-three is visible and required; select-four remains hidden and not required.");
  } else if (document.getElementById("6-band-button").checked) {
    console.log("Setting for 6-band...");
    selectThreeContainer.style.display = "block";
    selectFourContainer.style.display = "block";
    document.getElementById("select-three").setAttribute("required", true);
    document.getElementById("select-four").setAttribute("required", true);
    console.log("6-band: Both select-three and select-four are visible and required.");
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
// Function to display the calculated answer
/*function showCalculatedAnswer() {
  // Call the calculateAnswer function to perform the calculation
  calculateAnswer();
  // Display the result
  document.getElementById("result").innerText = " The calculated result is: " + Result + " Ohms";

  // Call the calculateTolerance function to calculate the tolerance
  calculateTolerance();
  document.getElementById("tolerance").innerText = "The calculated tolerance is +/- : " + Tolerance + "Ohms";
  document.getElementById("minimum").innerText = "The minimum  resistor is : " + Minimum + "Ohms";
  document.getElementById("maximum").innerText = "The maximum resistor is : " + Maximum + "Ohms";

}*/


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
function updateResistorImage() {
  // Get the selected colors from the dropdown menus
  let color1 = document.getElementById('select-one').options[document.getElementById('select-one').selectedIndex].dataset.color;
  let color2 = document.getElementById('select-two').options[document.getElementById('select-two').selectedIndex].dataset.color;
  let color3 = document.getElementById('select-three').options[document.getElementById('select-three').selectedIndex].dataset.color;
  let color4 = document.getElementById('select-four').options[document.getElementById('select-four').selectedIndex].dataset.color;
  let color5 = document.getElementById('select-five').options[document.getElementById('select-five').selectedIndex].dataset.color;
  let color6 = document.getElementById('select-tolerance').value.toLowerCase();
  //By using the data-color attribute in the HTML to store the color names separately from the numerical values used for calculation, 
  //you can ensure that the functionality for both calculating the resistor value and displaying the resistor image works correctly.

  // Map colors to their corresponding CSS classes
  let colorClasses = {
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
  document.getElementById('band1').className = 'band ' + colorClasses[color1];
  document.getElementById('band2').className = 'band ' + colorClasses[color2];
  if (color3 !== undefined && color3 !== '') {
    document.getElementById('band3').className = 'band ' + colorClasses[color3];
  }
  if (color4 !== undefined && color4 !== '') {
    document.getElementById('band4').className = 'band ' + colorClasses[color4];
  }
  document.getElementById('band5').className = 'band ' + colorClasses[color5];
  document.getElementById('band6').className = 'band ' + colorClasses[color6];
}




