    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var special = document.getElementById("special");
    
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    
    
    myInput.onkeyup = function() {
    
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      
    
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {  
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
      
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }
    
    var submitButton = document.querySelector('input[type="submit"]');
    var pswInput = document.getElementById("psw");
    var confirmPswInput = document.getElementById("confirm_psw");
    submitButton.addEventListener('click', function(event) {
      if (pswInput.value !== confirmPswInput.value) {
        event.preventDefault();
        document.getElementById("password-mismatch").style.display = "block";
        alert("The passwords do not match !");
        alert("There is a password mismatch. Please check the password entered in Password and Confirm Password.")
    } else {
      document.getElementById("password-mismatch").style.display = "none";
      alert("The details entered by you were correct and they were submitted successfully.Thank you for registering for the Anokha Techfest 2023.Hope you enjoy it.");
    }
    });
    
    function togglePasswordVisibility() {
      var passwordField = document.getElementById("psw");
      var toggleButton = document.getElementById("togglePassword");
    
    
      if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.innerHTML = "<i class='bi bi-eye-slash'></i>";
      } else {
        passwordField.type = "password";
        toggleButton.innerHTML = "<i class='bi bi-eye'></i>";
      }
    }
    
    function toggleconfirmPasswordVisibility() {
      var passwordField = document.getElementById("confirm_psw");
      var toggleButton = document.getElementById("toggleconfirmPassword");
    
      if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.innerHTML = "<i class='bi bi-eye-slash'></i>";
      } else {
        passwordField.type = "password";
        toggleButton.innerHTML = "<i class='bi bi-eye'></i>";
      }
    }
    
    function scrollDown() {
      window.scrollTo(0, document.body.scrollHeight);
    }

    function SubmitData() {
        alert("Your username and password have been submitted!");
      }

      function ValidateEmail() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var x = document.getElementById("email").value;
        if (!x.match(mailformat)) {
            alert("You have entered an invalid email address.Please enter a valid email address.");
            document.getElementById("email").focus()
        }
    }