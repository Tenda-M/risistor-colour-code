// Declare a global variable to store the result
let Result = 0;
let Tolerance = 0;
let Minimum = 0;
let Maximum = 0;

// Function to check the radio button and show/hide select elements accordingly
function check(){
  // if 4-band-button radio button is checked
  if(document.getElementById("4-band-button").checked){
    document.getElementById("select-three").hidden = true; 
    document.getElementById("select-four").hidden = true;
  }
  // if 5-band-button radio button is checked
  if(document.getElementById("5-band-button").checked == true){
    document.getElementById("select-three").hidden = false;
    document.getElementById("select-four").hidden = true;
  }
  // if 6-band-button radio button is checked
  if(document.getElementById("6-band-button").checked){
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
  if (document.getElementById("4-band-button").checked == true){
    Result = (parseInt(selectOne).toString() + parseInt(selectTwo).toString()) * parseInt(selectFive);
  } 
  if (document.getElementById("5-band-button").checked == true){
    Result = (parseInt(selectOne).toString() + parseInt(selectTwo).toString() + parseInt(selectThree).toString()) * parseInt(selectFive);
  }
  if (document.getElementById("6-band-button").checked == true){
    Result = (parseInt(selectOne).toString() + parseInt(selectTwo).toString() + parseInt(selectThree).toString() + parseInt(selectFour).toString()) * parseInt(selectFive);
  }  
}

// tolerance calculations
function calculateTolerance(){
  if (document.getElementById("select-tolerance").value === "Gold"){
    Tolerance = Result * 0.05;
    Minimum = Result - Tolerance;
    Maximum = Result + Tolerance;
  } 
  else if (document.getElementById("select-tolerance").value === "Silver"){
    Tolerance = Result * 0.1;
    Minimum = Result - Tolerance;
    Maximum = Result + Tolerance;
  }
   
  else{
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

/// Page popup
//window.addEventListener("load", function() //This ensures that the popup window opens automatically when the page finishes loading.
//{
//  setTimeout(function open(event)//Inside the setTimeout() function, the popup window is set to display after a delay of 1000 milliseconds (1 second).
  //{
  //    document.querySelector(".popup").style.display = "block";
 // }, 1000);
//});

// an event listener to the element that will trigger the popup
 document.getElementById("popupTrigger").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "block";
});

//function adds an event listener to the close button. When the close button is clicked, it hides the popup window by setting its display property to "none".
  document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});
