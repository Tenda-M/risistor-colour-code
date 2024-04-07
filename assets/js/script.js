// Declare a global variable to store the result
let Result = 0;

// Function to perform the calculation
function calculateAnswer() {
  // Get the selected values of the bands
  let selectOne = document.getElementById('select-one').value;
  let selectTwo = document.getElementById('select-two').value;
  let selectThree = document.getElementById('select-three').value;
  let selectFour = document.getElementById('select-four').value;
  let selectFive = document.getElementById('select-five').value;

  // Formula for the bands selection
  if (document.getElementById("4-band-button").checked == true){
    Result = (parseInt(selectOne) + parseInt(selectTwo)) * parseInt(selectFive);
  } 
  if (document.getElementById("5-band-button").checked == true){
    Result = (parseInt(selectOne) + parseInt(selectTwo) + parseInt(selectThree)) * parseInt(selectFive);
  }
  if (document.getElementById("6-band-button").checked == true){
    Result = (parseInt(selectOne) + parseInt(selectTwo) + parseInt(selectThree) + parseInt(selectFour)) * parseInt(selectFive);
  }  
}

// Function to display the calculated answer
function showCalculatedAnswer() {
  // Call the calculateAnswer function to perform the calculation
  calculateAnswer();
  
  // Display the result
  document.getElementById("result").innerText = "Result: " + Result;
}

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
