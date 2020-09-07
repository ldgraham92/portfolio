let badWords = ["feldercarb", "frach", "skinjob", "vulgarcarb"]; // Array of words to not allow in
let badWordCount = 0;

function populateEmail() { // Opens default mail client with pre-filled information from contact form
  let userSubject = document.getElementById("subject").value;
  let contactName = document.getElementById("name").value;
  let contactInquiry = document.getElementById("inquiry").value;

  window.open("mailto:faketest@fakemail.com?subject=" + userSubject + "&body=New%20Email%20From:%20" + contactName + "%0D%0A %0D%0A" + contactInquiry + "%0D%0A %0D%0A");
}

function sendEmail() { // Called when Send Email button is clicked on contact form
  let contactName = document.getElementById("name").value;
  let userSubject = document.getElementById("subject").value;
  let contactInquiry = document.getElementById("inquiry").value;
  let email = document.getElementById("email").value;
  let displayError = document.getElementById("displayError");
  displayError.style.padding = "8px";
  let errorMessage;
  let z = 1;

  for (var i = 0; i < badWords.length; i++) { // Comparing text entered in inquiry box to bad word array
    if (contactInquiry.indexOf(badWords[i]) != -1) {
      badWordCount++
    }
  }
  if (contactName.length < 3 && (z === 1)) { // Ensuring Name Field is at least 3 characters
    errorMessage = "Your Name Must Be At Least 3 Characters";
    displayError.innerHTML = errorMessage;
    z = 0;
  }
  if (userSubject.length < 5 && (z === 1)) { // Ensuring subject is at least 5 characters
    errorMessage = "Your Subject Must Be At Least 5 Characters";
    displayError.innerHTML = errorMessage;
    z = 0;
  }
  if (email.indexOf("@") == -1 && email.length < 6 && (z === 1)) { // Ensuring @ is present in email validation
    errorMessage = "Please Enter Valid Email Address";
    displayError.innerHTML = errorMessage;
    z = 0;
  }
  if (contactInquiry.length <= 25 && (z === 1)) { // Ensuring inquiry is at least 25 characters
    errorMessage = "Your Message Must Be More Than 25 Characters";
    displayError.innerHTML = errorMessage;
    z = 0;
  }
  if (badWordCount >= 1 && (z === 1)) { // If badwords are present, informs user to remove them before form will work
    errorMessage = "Please Remove Vulgarities From Your Email"
    displayError.innerHTML = errorMessage;
    z = 0;
  }
  if (z == 1){  // Calls the populate email function
    populateEmail() 
  }
  else {
    return false;
  }
}