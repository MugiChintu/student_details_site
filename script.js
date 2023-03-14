document.addEventListener('DOMContentLoaded', function() {
  var loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // check if username and password are valid
    if (username === "hello" && password === "1234") {
      // redirect to new page
      window.location.href = "newpage.html";
    } else {
      // display error message
      var error = document.getElementById('error');
      error.innerHTML = "Invalid username or password";
    }
  });
});