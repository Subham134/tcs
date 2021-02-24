var a = document.getElementById("pnr");

    a.value=Math.floor(Math.random() * 10000000);     
 var b = document.getElementsByClassName("req");
 function validateForm() {
    var x = document.forms["myForm"]["pnr"].value;
    if (x == "") {
      alert("PNR must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["Travel Date"].value;
    if (y == "") {
      alert("Travel Date must be filled out");
      return false;
    }
    var z = document.forms["myForm"]["source"].value;
    if (z == "") {
      alert("Source airport must be filled out");
      return false;
    }
    var p = document.forms["myForm"]["dest"].value;
    if (p == "") {
      alert("Destinantion airport must be filled out");
      return false;
    }
    var q = document.forms["myForm"]["status"].value;
    if (q == "") {
      alert("Status must be selected");
      return false;
    }
    var r = document.forms["myForm"]["Seat Preference"].value;
    if (r == "") {
      alert("Seat Preference must be selected");
      return false;
    }
    var m = document.forms["myForm"]["Meal Preference"].value;
    if (m == "") {
      alert("Meal Preference must be selected");
      return false;
    }
  }

  