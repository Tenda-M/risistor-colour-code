// Declare a global variable to store the result
let Result = 0;
let Tolerance = 0;

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
  // Get the selected values of the bands
  let selectOne = document.getElementById('select-one').value;
  let selectTwo = document.getElementById('select-two').value;
  let selectThree = document.getElementById('select-three').value;
  let selectFour = document.getElementById('select-four').value;
  let selectFive = document.getElementById('select-five').value;

  // Formula for the bands selection,// Converts numbers to strings and concatenates them
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

function calculateTolerance(){
  if (document.getElementById("select-tolerance").value === "Gold"){
    Tolerance = Result * 0.05;
  } 
  else if (document.getElementById("select-tolerance").value === "Silver"){
    Tolerance = Result * 0.1;
  }
  else{
    Tolerance = 0; // Default value if no tolerance is selected
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
}


