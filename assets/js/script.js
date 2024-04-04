/*/unhide the drop down button
const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownBand = document.querySelector(".dropdown__band");

//add event listerner to get dropdown menu
dropdownBtn.addEventListener("click",() => {
    //toggle the buttone to hide and open 
    dropdownBand.classList.toggle("hide");
});

// add even listner that will allow dropdown to close when not in use
window.addEventListener('click', (e) =>{
//if target is not equal to then hide button dropdown
if(e.target!==dropdownBtn){
dropdownBand.classList.add("hide");
}
}); */

// to check a variable is of function
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
    document.getElementById("select-three").hidden=false;
    document.getElementById("select-four").hidden=false; }
}

