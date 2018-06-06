(function () {
  var $birth = $('#birthday');
  var $parentsConsent = $('#parents-consent');
  var $consentContainer = $('#consent-container');
  //jQuery powered date picker
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

  $birth.on('blur change', checkDate);  //DOB will blur off screen

  function checkDate() {
    var dob = this.value.split('-');
    //toggleParentsConsent() as a date object
    toggleParentsConsent(new Date(dob[0], dob[1] -1, dob[2]));
  }

  function toggleParentsConsent(date) {
    if (isNaN(date)) return;
    var now = new Date();

    //not preset to handle leap years
    //Parent's consent tickbox triggered on if under 13 years old
    if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {
      $consentContainer.removeClass('hide');
      $parentsConsent.focus();
    } else {
      $consentContainer.addClass('hide');
      $parentsConsent.prop('checked', false);
    }
  }
});
