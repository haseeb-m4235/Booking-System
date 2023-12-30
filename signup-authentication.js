const apiUrl="http://127.0.0.1:8080/signupuser";

async function signupuser(data) {
    try {
        // Use the fetch API to send data to our own authentication server
        fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', 
    },
        body: JSON.stringify(data), // Convert data to string
    });
    console.log("The user is signed up successfully. Now redirecting to login page.")
    window.location.href = "index.html";

    }catch (error) {
        // Log any errors to the console
        console.error('Failed to send details to server:', error);
    }
}


// document.getElementById('signupForm').addEventListener('submit', function (e) {
//     e.preventDefault();
  
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('signup-password').value;
//     const name=document.getElementById('name').value;
  
  
//     const data = {
//       email: email,
//       password: password,
//       name:name
//     };
  
//     signupuser(data);
  
//   });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Get the values from the form inputs
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const contactnumber = document.getElementById('contactNumber').value;
      // Validate the form data
      if (validateForm(username, email, password, confirmPassword,contactnumber)) {
        // If validation passes, send this data to a server
        console.log("sending data to server")
        const data = {
            email: email,
            password: password,
            name:username,
            contactnumber:contactnumber
          };
        signupuser(data);
        console.log('Form is valid, send data to server or handle it here.');
        // For example: sendDataToServer({ username, email, password });
      } else {
        // If validation fails, show an appropriate message or handle errors
        console.error('Form is invalid, show error messages.');
      }
    });
// A simple client-side validation function
function validateForm(username, email, password, confirmPassword,contactnumber) {
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email regex
    const isValidPassword = (password) => password.length >= 8; // Check if password is at least 8 characters
    const isPasswordMatch = (password, confirmPassword) => password === confirmPassword;
    //const isValidcontactnumber = (contactnumber) => typeof contactnumber === 'number';;

    return (
      username.trim() !== '' &&
      isValidEmail(email) &&
      isValidPassword(password) &&
      isPasswordMatch(password, confirmPassword) 
      //isValidcontactnumber(contactnumber)
    ) 
    }
    });