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
    window.location.href = "login.html";

    }catch (error) {
        // Log any errors to the console
        console.error('Failed to send details to server:', error);
    }
}


document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('signup-password').value;
    const name=document.getElementById('name').value;
  
  
    const data = {
      email: email,
      password: password,
      name:name
    };
  
    signupuser(data);
  
  });