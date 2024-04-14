// Declare a global variable to store the result
let Result = 0;
let Tolerance = 0;
let Minimum = 0;
let Maximum = 0;

// Function to check the radio button and show/hide select elements accordingly
function check() {
  // if 4-band-button radio button is checked
  if (document.getElementById("4-band-button").checked) {
    document.getElementById("select-three").hidden = true;
    document.getElementById("select-four").hidden = true;
  }
  // if 5-band-button radio button is checked
  if (document.getElementById("5-band-button").checked == true) {
    document.getElementById("select-three").hidden = false;
    document.getElementById("select-four").hidden = true;
  }
  // if 6-band-button radio button is checked
  if (document.getElementById("6-band-button").checked) {
    document.getElementById("select-three").hidden = false;
    document.getElementById("select-four").hidden = false;
  }
}

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

/*
//Script to update resistor image 
// Function to update the resistor image
  function updateResistorImage() {
    
    // Get the selected colors from the dropdown menus
    let selectOne = document.getElementById('select-one');
    let selectTwo = document.getElementById('select-two');
    let selectThree = document.getElementById('select-three');
    let selectFour = document.getElementById('select-four');
    let selectFive = document.getElementById('select-five');

    let color1 = selectOne.options[selectOne.selectedIndex].dataset.color.toLowerCase();
    let color2 = selectTwo.options[selectTwo.selectedIndex].dataset.color.toLowerCase();
    let color3 = selectThree.options[selectThree.selectedIndex].dataset.color.toLowerCase();
    let color4 = selectFour.options[selectFour.selectedIndex].dataset.color.toLowerCase();
    let color5 = selectFive.options[selectFive.selectedIndex].dataset.color.toLowerCase();
//By using the data-color attribute in the HTML to store the color names separately from the numerical values used for calculation, 
//you can ensure that the functionality for both calculating the resistor value and displaying the resistor image works correctly.

console.log("Color 1:", color1);
console.log("Color 2:", color2);
console.log("Color 3:", color3);
console.log("Color 4:", color4);
console.log("Color 5:", color5);


  //console.log("Selected Colors:", color1, color2, color3, color4, color5);

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

   document.getElementById('band1').className = 'band ' + colorClasses[color1];
    document.getElementById('band2').className = 'band ' + colorClasses[color2];
    document.getElementById('band3').className = 'band ' + colorClasses[color3];
    document.getElementById('band4').className = 'band ' + colorClasses[color4];
    document.getElementById('band5').className = 'band ' + colorClasses[color5];
/*
  // Set the background color of each band based on the selected color
  document.getElementById('band1').className = 'band ' + colorClasses[color1];
  document.getElementById('band2').className = 'band ' + colorClasses[color2];
  
  // Check if the third band is selected
  if (color3 !== 'colour band') {
    document.getElementById('band3').className = 'band ' + colorClasses[color3];
  } else {
    // If not selected, reset the band color and show it
    document.getElementById('band3').className = 'band';
    document.getElementById('band3').style.display = 'block';
  }
  // Check if the fourth band is selected
  if (color4 !== 'colour band') {
    document.getElementById('band4').className = 'band ' + colorClasses[color4];
  } else {
    // If not selected, reset the band color and show it
    document.getElementById('band4').className = 'band';
    document.getElementById('band4').style.display = 'block';
  }
  // Set the background color of the fifth band (multiplier)
  document.getElementById('band5').className = 'band ' + colorClasses[color5];*/
//}


//////////////////////////////////////////////////////////////////////////////////////////////////

 
  /*/ Set the background color of each band based on the selected color
  document.getElementById('band1').classList = 'band ' + colorClasses[color1];
  document.getElementById('band2').classList = 'band ' + colorClasses[color2];
  document.getElementById('band3').classList = 'band ' + colorClasses[color3];
  document.getElementById('band4').classList = 'band ' + colorClasses[color4];
  document.getElementById('band5').classList = 'band ' + colorClasses[color5];
  }*/

  /*
  // Set the background color of each band based on the selected color
  document.getElementById('band1').classList = 'band ' + colorClasses[color1];
  document.getElementById('band2').classList = 'band ' + colorClasses[color2];
  // if color3 and color4 are not empty strings before assigning them to the corresponding resistor bands. 
  //This ensures that only the selected colors are applied to the visible bands, and any hidden bands remain unchanged.
  if (color3 !== '') {
      document.getElementById('band3').classList = 'band ' + colorClasses[color3];
  }
  if (color4 !== '') {
      document.getElementById('band4').classList = 'band ' + colorClasses[color4];
  }
  document.getElementById('band5').classList = 'band ' + colorClasses[color5];
}*/
