
 function validateForm() {
    var x = document.forms["myForm"]["user"].value;
    if (x == "") {
      alert("User Name must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["password"].value;
    if (y == "") {
      alert("password  must be filled out");
      return false;
    }
      }

  