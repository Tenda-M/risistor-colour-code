// Declare a global variable to store the result
let Result = 0;
let Tolerance = 0;
let Minimum = 0;
let Maximum = 0;

// Function to check the radio button and show/hide select elements accordingly
function check() {
  console.log("Checking radio buttons...");
  // if 4-band-button radio button is checked
  if (document.getElementById("4-band-button").checked) {
    console.log("4-band button is checked.");
    document.getElementById("select-three").hidden = true;
    document.getElementById("third-band-label").hidden = true;
    document.getElementById("select-four").hidden = true;
    document.getElementById("fourth-band-label").hidden = true;
    
  }
  // if 5-band-button radio button is checked
  else if (document.getElementById("5-band-button").checked) {
    console.log("5-band button is checked.");
    document.getElementById("select-three").hidden = false;
    document.getElementById("third-band-label").hidden = false;
    document.getElementById("select-four").hidden = true;
    document.getElementById("fourth-band-label").hidden = true;
  }
  // if 6-band-button radio button is checked
  else if (document.getElementById("6-band-button").checked) {
    console.log("6-band button is checked.");
    document.getElementById("select-three").hidden = false;
    document.getElementById("third-band-label").hidden = false;
    document.getElementById("select-four").hidden = false;
    document.getElementById("fourth-band-label").hidden = false;
  }
 // adjustLayout();
}
/*
// Function to adjust the layout based on the visibility of bands 3 and 4
function adjustLayout() {
  let bandSelect = document.querySelector('.band-select');
  if (document.getElementById("4-band-button").checked) {
    bandSelect.style.width = '100%'; // Reduce width when both bands are hidden
    bandSelect.style.justifyContent = 'center'; // Center align items when both bands are hidden
  } 
 else if (document.getElementById("5-band-button").checked) {
  bandSelect.style.width = '100%'; // Reduce width when both bands are hidden
  bandSelect.style.justifyContent = 'center'; // Center align items when both bands are hidden
}else {
    bandSelect.style.width = '80%'; // Default width when bands are visible
    bandSelect.style.justifyContent = 'center'; // Center align items when both bands are hidden
  }
}
*/



// Function to perform the calculation
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
function showCalculatedAnswer() {
  // Call the calculateAnswer function to perform the calculation
  calculateAnswer();
  // Display the result
  document.getElementById("result").innerText = " The calculated result is: " + Result + " Ohms";

  // Call the calculateTolerance function to calculate the tolerance
  calculateTolerance();
  document.getElementById("tolerance").innerText = "The calculated tolerance is +/- : " + Tolerance + "Ohms";
  document.getElementById("minimum").innerText = "The minimum  resistor is : " + Minimum + "Ohms";
  document.getElementById("maximum").innerText = "The maximum resistor is : " + Maximum + "Ohms";

}

//**************** Page popup box ******************
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

//******************** Resistor image *******************
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


