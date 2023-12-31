

const apiUrl = 'http://127.0.0.1:8080/senduserdata';
// Function to call the API and log the response
async function fetchUsers(data) {
    try {
        // Use the fetch API to send data to our own authentication server
        fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', 
    },
        body: JSON.stringify(data), // Convert data to string
    });
    console.log("datasent successfully")
    console.log("Now Verifying user")
    const response = await fetch('http://127.0.0.1:8080/verifyuser',{
        method:'GET'
    }).then(response => response.json())
    .then(data => {
        return data
    });
    // sending user id to backend to redirect him to his own page
    console.log("The user is ",response[0].Name,"with id",response[0].UserID)
    const userid={
        userid:response[0].UserID,
        username:response[0].Name
    }
    fetch("http://127.0.0.1:8080/senduserid", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', 
    },
        body: JSON.stringify(userid), // Convert data to string
    });

    window.location.href = "../usermenu/usermenu.html";

                
    }catch (error) {
        // Log any errors to the console
        console.error('Failed to send details to server:', error);
    }
}




document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  const data = {
    email: email,
    password: password
  };

  fetchUsers(data);

});
  
