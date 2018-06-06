// JavaScript validation of subscription form.
// Anonymous function triggered by submit event
// Functions called to perform generic checks by anon function in section A
// Functions called to perform generic checks by anon function in section A
// Functions to get / set / show / remove error messages
// Object to check type of data using RegEx called by validateTypes in section B

// Dependencies: jQuery, jQueryUI, birthday.js, styles.css
(function () {
  document.forms.register.noValidate = true;
  $('form').on('submit', function (e) {
    var elements = this.elements;
    var isValid = {};
    var isFormValid;        //Scans the entire form

    for (var i = 0, 1 = (elements.length -1); i < 1; i++) {
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
      if (!isValid) {
        showErrorMessage(elements[i]);
      } else {
        removeErrorMessage(elements[i]);
      }
    valid[elements[i].id] = isValid; //Add element to the valid object
    }

    //Custom validation
    if (!validateBio()) {
      showErrorMessage(document.getElementById('bio'));
      valid.bio = false;
    } else {
      removeErrorMessage(document.getElementById('bio'));
    } //two more functions to follow

    //Did it pass?

    for (var field in valid) {
      if (!valid[field]) {
        isFormValid = false;
        break;
      }
      isFormValid = true;
    }

    if (!isFormValid) {
      e.preventDefault();
    }
  });
  //  END: anonymous function triggered by the submit button


    // -------------------------------------------------------------------------
    // B) FUNCTIONS FOR GENERIC CHECKS
    // -------------------------------------------------------------------------

    // CHECK IF THE FIELD IS REQUIRED AND IF SO DOES IT HAVE A VALUE
    function validateBio() {
      var bio = document.getElementById('bio');
      var valid = bio.value.length <= 140;
      if (!valid) {
        setErrorMessage(bio, 'Your biography cannot exceed 140 characters');
      }
    return valid;
    }

    function validatePassword() {
      var password = document.getElementById('password');
      var valid = password.value.length >=8 ;
      if (!valid) {
        setErrorMessage(password, 'Password must be at least 8 characters');
      }
      return valid;
    }
});
