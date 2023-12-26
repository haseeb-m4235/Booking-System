// Assuming your servers are running on localhost and port 3000
const apiUrl = 'http://localhost:3000/users';
console.log("hello")
// Function to call the API and log the response
async function fetchUsers() {
    try {
        // Use the fetch API to get the data
        const response = await fetch(apiUrl);

        // If the response is not OK, throw an error
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const users = await response.json();

        // Log or process the user data
        console.log('Users:', users);
        return users;
    } catch (error) {
        // Log any errors to the console
        console.error('Failed to fetch users:', error);
    }
}


async function checkLoginCredentials(username, password) {
      const users = await fetchUsers(); // Await the Promise.
      for (let user of users) {
          if (user.ContactDetails === username && user.LoginCredentials === password) {
              console.log('Login successful!');
              return; // Exit the function once the user is found.
          }
      }
      console.log('Login failed: Incorrect username or password.');
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Username:', username, 'Password:', password);

  checkLoginCredentials(username, password);
});
  
