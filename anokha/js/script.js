/*
Author : Manbendra Satpathy
Created Date : 27 December 2023
Updated Date : 07 January 2023
Description : Script Javascript
*/
function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById("email").value;
    if (!x.match(mailformat)) {
       alert("You have entered an invalid email address!");
       document.getElementById("email").focus()
    }
 }
 
 function PhoneNumberCheck() {
    var x = document.getElementById("phonenumber").value;
    if (!(x.toString().length == 10)) {
       alert("Please enter a valid phone number!")
       document.getElementById("phonenumber").focus()
    }
 }
 
 function NameCheck() {
 
    var pattern = /^[a-zA-Z ]+$/;
 
 
    var name = document.getElementById("name").value;
 
    if (!pattern.test(name)) {
       alert("Please enter a valid name!");
       document.getElementById("name").focus();
    }
 }