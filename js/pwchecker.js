// Security level
var securLvl = 1;

// Password validity
var valid = false;

// Both passwords match
var match = false;

// Minimum password length
minLength = 8;

// Write minLength into the page
function writeMin() {
  minLengthNode = document.createTextNode(minLength.toString());
  document.getElementById("minchar").appendChild(minLengthNode);
}

// Set security level
function setLvl() {
  // Clear previous passwords, status and disable second textbox
  document.getElementById("pwbox1").value = "";
  document.getElementById("pwbox2").value = "";
  document.getElementById("pwbox2").disabled = true;
  var c1 = document.getElementById("status1");
  var c2 = document.getElementById("status2");
  if (c1.hasChildNodes()) {
    c1.firstChild.nodeValue = "";
  }
  if (c2.hasChildNodes()) {
    c2.firstChild.nodeValue = "";
  }

  // Set level
  x = document.getElementsByName("security");
  var i = 0;
  exit = false;
  while (!exit && i < x.length) {
    if (x[i].checked === true) {
      securLvl = i + 1;
      exit = true;
    }
    i++;
  }
}

// Check password validity
function check() {
  // Dummy text for empty span tag
  var c1 = document.getElementById("status1");
  var c2 = document.getElementById("status2");
  if (!c1.hasChildNodes()) {
    dummyText = document.createTextNode("");
    document.getElementById("status1").appendChild(dummyText);
  }
  if (!c2.hasChildNodes()) {
    dummyText = document.createTextNode("");
    document.getElementById("status2").appendChild(dummyText);
  }

  // Get passwords
  var yourPw = document.getElementById("pwbox1").value;
  var yourPw2 = document.getElementById("pwbox2").value;

  // Restriction flags
  var r1, r2, r3, r4, r5;
  
  // Choose appropriate level
  switch (securLvl) {
    case 1:
      r1 = restriction1();
      if (yourPw === "") {
        // First textbox got cleared, clear and disable second textbox
        action1(c1, c2);
      } else if (r1) {
        // Password in first textbox is valid, enable second textbox
        action2(c1, c2);
      } else {
        // Password in first textbox is invalid, clear and disable second textbox
        action3(c1, c2);
      }
      break;
    case 2:
      r2 = restriction2();
      if (yourPw === "") {
        // First textbox got cleared, clear and disable second textbox
        action1(c1, c2);
      } else if (r2) {
        // Password in first textbox is valid, enable second textbox
        action2(c1, c2);
      } else {
        // Password in first textbox is invalid, clear and disable second textbox
        action3(c1, c2);
      }
      break;
    case 3:
      r2 = restriction2();
      r3 = restriction3();
      if (yourPw === "") {
        // First textbox got cleared, clear and disable second textbox
        action1(c1, c2);
      } else if (r2 && r3) {
        // Password in first textbox is valid, enable second textbox
        action2(c1, c2);
      } else {
        // Password in first textbox is invalid, clear and disable second textbox
        action3(c1, c2);
      }
      break;
    case 4:
      r2 = restriction2();
      r4 = restriction4();
      if (yourPw === "") {
        // First textbox got cleared, clear and disable second textbox
        action1(c1, c2);
      } else if (r2 && r4) {
        // Password in first textbox is valid, enable second textbox
        action2(c1, c2);
      } else {
        // Password in first textbox is invalid, clear and disable second textbox
        action3(c1, c2);
      }
      break;
    case 5:
      r2 = restriction2();
      r5 = restriction5();
      if (yourPw === "") {
        // First textbox got cleared, clear and disable second textbox
        action1(c1, c2);
      } else if (r2 && r5) {
        // Password in first textbox is valid, enable second textbox
        action2(c1, c2);
      } else {
        // Password in first textbox is invalid, clear and disable second textbox
        action3(c1, c2);
      }
      break;
  }

  // Check if both passwords match
  if (valid && yourPw2 === "") {
    c2.firstChild.nodeValue = "";
    match = false;
  } else if (valid && (yourPw === yourPw2)) {
    c2.firstChild.nodeValue = "OK";
    match = true;
  } else if (valid && (yourPw !== yourPw2)) {
    c2.firstChild.nodeValue = "Invalid";
    match = false;
  }

}

// Restriction for Level 1
function restriction1() {
  var yourPw = document.getElementById("pwbox1").value;
  if (yourPw.length >= 1) {
    return true;
  } else {
    return false;
  }
}

// Restriction for Level 2
function restriction2() {
  var yourPw = document.getElementById("pwbox1").value;
  if (yourPw.length >= minLength) {
    return true;
  } else {
    return false;
  }
}

// Restriction for Level 3
function restriction3() {
  var yourPw = document.getElementById("pwbox1").value;
  var x = (yourPw.search(/[0-9]/) >= 0);
  var y = (yourPw.search(/[a-z]/i) >= 0);
  if (x && y) {
    return true;
  } else {
    return false;
  }
}

// Restriction for Level 4
function restriction4() {
  var yourPw = document.getElementById("pwbox1").value;
  var x = (yourPw.search(/[0-9]/) >= 0);
  var y = (yourPw.search(/[a-z]/) >= 0);
  var z = (yourPw.search(/[A-Z]/) >= 0);
  if (x && y && z) {
    return true;
  } else {
    return false;
  }
}

// Restriction for Level 5
function restriction5() {
  var yourPw = document.getElementById("pwbox1").value;
  var x = (yourPw.search(/[0-9]/) >= 0);
  var y = (yourPw.search(/[a-z]/) >= 0);
  var z = (yourPw.search(/[A-Z]/) >= 0);
  // Special characters
  var t = (yourPw.search(/[\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2A\x2B\x2C\x2D\x2E\x2F\x3A\x3B\x3C\x3D\x3E\x3F\x40\x5B\x5C\x5D\x5E\x5F\x60\x7B\x7C\x7D\x7E]/) >= 0);
  if (x && y && z && t) {
    return true;
  } else {
    return false;
  }
}

// Action 1: First textbox got cleared, clear and disable second textbox
function action1(c1, c2) {
  c1.firstChild.nodeValue = "";
  valid = false;
  // Clear and disable second textbox
  document.getElementById("pwbox2").value = "";
  document.getElementById("pwbox2").disabled = true;
  c2.firstChild.nodeValue = "";
  match = false;
}

// Action 2: Password in first textbox is valid, enable second textbox
function action2(c1, c2) {
  c1.firstChild.nodeValue = "OK";
  valid = true;
  // Enable second textbox
  document.getElementById("pwbox2").disabled = false;
  match = false;
}

// Action 3: Password in first textbox is invalid, clear and disable second textbox
function action3(c1, c2) {
  c1.firstChild.nodeValue = "Invalid";
  valid = false;
  // Clear and disable second textbox
  document.getElementById("pwbox2").value = "";
  document.getElementById("pwbox2").disabled = true;
  c2.firstChild.nodeValue = "";
  match = false;
}

// Pre-submission check
function verify() {
  if (valid && match) {
    alert("Registration completed");
  }
  if (valid && !match) {
    alert("Your passwords do not match");
  }
  if (!valid) {
    alert("Insert a valid password");
  }
}