// Function to handle form submission
function sendmail(event) {
  event.preventDefault();  // Prevent the default form submission

  // Get form values
  var name = document.getElementById("username").value;
  var phone = document.getElementById("usermobile").value;
  var email = document.getElementById("useremail").value;
  var message = document.getElementById("usermessage").value;

  // Validate the form fields
  if (validateForm(name, phone, email, message)) {
    // Prepare the data to be sent to Formspree
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    // Send the form data to Formspree using Fetch API
    fetch("https://formspree.io/f/xjkgyrer", {
      method: "POST",
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        console.log('Message sent successfully!');
        document.getElementById("popupOverlay").style.display = "flex"; // Show success popup
        document.getElementById("contactForm").reset(); // Reset the form
      } else {
        console.error('Error sending message:', response.statusText);
        alert("Failed to send message. Please try again.");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("An error occurred while sending the message.");
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
