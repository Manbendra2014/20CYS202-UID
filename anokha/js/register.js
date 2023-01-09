/*
Author : Manbendra Satpathy
Created Date : 27 December 2023
Updated Date : 07 January 2023
Description : Registration Javascript
*/
$("input:checkbox").click(function () {
  var bol = $("input:checkbox:checked").length > 8;
  $("input:checkbox").not(":checked").attr("disabled", bol);
});

function ValidateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var x = document.getElementById("email").value;
  if (!x.match(mailformat)) {
     alert("You have entered an invalid email address.Please enter a valid email address.");
     document.getElementById("email").focus()
  }
}

function PhoneNumberCheck() {

  var x = document.getElementById("mobilenumber").value;
  console.log(x)
  if (!(x.toString().length == 10)) {
     alert("You have entered an invalid phone number. Please enter a valid phone number.")
     document.getElementById("mobilenumber").focus()
  }
}

function NameCheck() {
  var x = document.getElementById("name").value;
  var y = x.split("")
  let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  var arrLen = sp.length;
  for (var i = 0; i < arrLen; i++) {
     if (y.includes(sp[i])) {
        alert("You have entered an invalid name.Special characters are present in the name.Please remove the special characters and enter a valid name.")
        document.getElementById("name").focus()
        break
     }
  }


}

function SubmitData() {
  var stopfunction = false;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobilenumber = document.getElementById("mobilenumber").value;
  var college = document.getElementById("college").value;
  var idnumber = document.getElementById("idnumber").value;
  var collegename = document.getElementById("collegename").value;
  var username = document.getElementById("usrname").value;
  var password = document.getElementById("psw").value;
  if (name == "" || email == "" || mobilenumber == "" || college == "" || idnumber == "" || collegename == "" || username == "" || ( password == "" && password.value.length >= 8)){
     alert("All * marked fields are required. The length of your password must be a minimum of 8 characters.");
     alert("Please check whether you have filled the required fields and your password is of 8 characters.");
  } else {
     alert("All your details have been submitted. Thank you.");
  }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");

myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function () {

  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
     letter.classList.remove("invalid");
     letter.classList.add("valid");
  } else {
     letter.classList.remove("valid");
     letter.classList.add("invalid");
  }


  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
     capital.classList.remove("invalid");
     capital.classList.add("valid");
  } else {
     capital.classList.remove("valid");
     capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
     number.classList.remove("invalid");
     number.classList.add("valid");
  } else {
     number.classList.remove("valid");
     number.classList.add("invalid");
  }

  if (myInput.value.match(/[@$!%*?&]/g)) {
     special.classList.remove("invalid");
     special.classList.add("valid");
  } else {
     special.classList.remove("valid");
     special.classList.add("invalid");
  }

  if (myInput.value.length >= 8) {
     length.classList.remove("invalid");
     length.classList.add("valid");
  } else {
     length.classList.remove("valid");
     length.classList.add("invalid");
  }
}