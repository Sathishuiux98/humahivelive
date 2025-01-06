function sendmail() {
  // Get the form elements
  var name = document.getElementById("username").value;
  var phone = document.getElementById("usermobile").value;
  var email = document.getElementById("useremail").value;
  var message = document.getElementById("usermessage").value;

  // Validate the form data
  if (validateForm(name, phone, email, message)) {
   
   

      // Send the email using EmailJS
      event.preventDefault();
      
      // Get form data
      const name = document.getElementById("username").value;
      const phone = document.getElementById("usermobile").value;
      const email = document.getElementById("useremail").value;
      const message = document.getElementById("usermessage").value;
    
      // Send email via EmailJS
      emailjs.send('service_315nxpu', 'template_bmv0yrr', {
        name: name,
        phone: phone,
        email: email,
        message: message
      }).then(function(response) {
        console.log('Success:', response);
        document.getElementById("popupOverlay").style.display = "flex";
        document.getElementById("contactForm").reset();
      }, function(error) {
        console.log('Error:', error);
        alert("Failed to send email.");
      });
    
  }
}

// Validate the form fields
function validateForm(name, phone, email, message) {
  let isValid = true;

  // Validate name
  if (name.trim() === "") {
      document.getElementById("usernameError").innerText = "Name is required.";
      isValid = false;
  } else {
      document.getElementById("usernameError").innerText = "";
  }

  // Validate phone number (optional, adjust if necessary)
  if (phone.trim() === "") {
      document.getElementById("phoneError").innerText = "Phone number is required.";
      isValid = false;
  } else {
      document.getElementById("phoneError").innerText = "";
  }

  // Validate email
  if (email.trim() === "") {
      document.getElementById("emailError").innerText = "Email is required.";
      isValid = false;
  } else if (!validateEmail(email)) {
      document.getElementById("emailError").innerText = "Enter a valid email address.";
      isValid = false;
  } else {
      document.getElementById("emailError").innerText = "";
  }

  // Validate message
  if (message.trim() === "") {
      document.getElementById("messageError").innerText = "Message is required.";
      isValid = false;
  } else {
      document.getElementById("messageError").innerText = "";
  }

  return isValid;
}

// Function to validate the email format
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to close the success popup
function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}