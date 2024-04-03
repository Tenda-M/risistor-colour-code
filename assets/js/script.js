//unhide the drop down button
const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownBand = document.querySelector(".dropdown__band");

//functon to get dropdown menu
dropdownBtn.addEventListener("click",() => {
    //toggle the buttone to hide and open 
    dropdownBand.classList.toggle("hide");
});
