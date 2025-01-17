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

      const sendEmail = async () => {
        const apiKey = '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';
        const url = 'https://api.sendinblue.com/v3/smtp/email';
        
        body = 'Hi HumaHive,<br>Someone has reached out to you via your website regarding your HR services. The details of the user are provided below:<br><br>Name : <NAME><br>Email : <EMAIL><br>Phone Number : <PHONE><br>Message : <MESSAGE>'
        body = body.replace('<PHONE>',phone)
        body = body.replace('<NAME>',name)
        body = body.replace('<EMAIL>',email)
        body = body.replace('<MESSAGE>',message)

    
        const emailData = {
            sender: { name: 'Sathish', email: 'sathishuiux@gmail.com' },
            to: [
                { email: 'contact@humahive.com', name: 'huma' }
            ],
            subject: 'New Inquiry Regarding HR Services',

            htmlContent: body

    
        };
    
        if(true) {
    console.log('sent successfully')
    
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                },
                body: JSON.stringify(emailData)
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Email sent successfully:', result);
    
            } else {
                console.error('Error sending email:', response.statusText);
            }
        }     };
    
    sendEmail();
    
    
      // Send email via EmailJS
      // emailjs.send('service_315nxpu', 'template_bmv0yrr', {
      //   name: name,
      //   phone: phone,
      //   email: email,
      //   message: message
      // }).then(function(response) {
      //   console.log('Success:', response);
      //   document.getElementById("popupOverlay").style.display = "flex";
      //   document.getElementById("contactForm").reset();
      // }, function(error) {
      //   console.log('Error:', error);
      //   alert("Failed to send email.");
      // });
    
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
