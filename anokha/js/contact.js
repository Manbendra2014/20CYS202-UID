/*
Author : Manbendra Satpathy
Created Date : 27 December 2023
Updated Date : 07 January 2023
Description : Contact Javascript
*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
   let parent = this.parentNode;
   parent.classList.add("focus");
}

function blurFunc() {
   let parent = this.parentNode;
   if (this.value == "") {
      parent.classList.remove("focus");
   }
}

inputs.forEach((input) => {
   input.addEventListener("focus", focusFunc);
   input.addEventListener("blur", blurFunc);
});