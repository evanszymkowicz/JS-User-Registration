(function () {
  var form, options, otherText, hide; //Atom unable to recognize other v. removed
  form = document.getElementById('how-heard'); //TODO: Why?
  options = form.elements.heard;

  //other = document.getElementById('other');
  otherText = document.getElementById('other-text');
  otherText.className = 'hide';

  for (var i = [0]; i < options.length; i++) {        //Looping through radios
    addEvent(options[i], 'click', radioChanged);      //Event listener
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';
    otherText.className = hide;
    if (hide) {
      otherText.value = '';
    }
  }
}());
