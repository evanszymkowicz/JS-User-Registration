(function () {
  var form = document.getElementById('login');

  addEvent(form, 'submit', function (e) {              //User submits form
    e.preventDefault();                               //Stop form
    var elements = this.elements;                     //Get form elements
    var username = elements.username.value;           //Select username entered
    var msg      = 'Welcome ' + username;             //Welcome message
    document.getElementById('main').textContent = msg;//Write the welcome message
  });
}());
