(function () {
  var pwd = document.getElementById('pwd'); //Password Input
  var chk = document.getElementById('showPwd'); //Checkbox

  addEvent(chk, 'change', function (e) {
    var target = e.target || e.srcElement;
    try {
      if (target.checked) {
        pwd.type = 'text';
      } else {
        pwd.type = 'password';
      }
    } catch (error) {
      alert('This browser does not support that action');
    }
  });

}());
