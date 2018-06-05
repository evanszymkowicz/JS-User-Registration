(function () {
  var form = document.getElementById('newpwd');
  var password = document.getElementById('pwd');
  var submit = document.getElementById('submit');

  var submitted = false;

  submit.disabled = true;
  submit.className = 'disabled';

  //Check whether or not to activate submit key on input
  addEvent(password, 'input', function (e) {
    var target = e.target || e.srcElement;
    submit.disabled = submitted || target.value;
    submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
  });

  //Disables the form on submit so that I cannot be entered again
  addEvent(form, 'submit', function (e) {
    if (submit.disabled || submitted) {
      e.preventDefault();
      return;
    }

    submit.disabled = true;
    submitted = true;
    submit.className = 'disabled';

    //Form submit demo
    e.preventDefault();
    alert('Password is ' + password.value);
  });
}());
