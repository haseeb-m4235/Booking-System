import express from 'express';
import mysql from 'mysql2';

// Create a new express application instance
const app = express();
const port = 3000; // Port where the server will listen

// Create a pool of connections for MySQL
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'haseeb123456789',
    database: 'testing'
}).promise();

// Function to get user information from the database
async function getUserInfo() {
  try {
      const [result] = await pool.query("SELECT * FROM user");
      return result;
  } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Rethrow for further handling if necessary.
  }
}

// Define a route for fetching user data
app.get('/users', async (req, res) => {
    try {
        const users = await getUserInfo();
        res.json(users); // Send the user data as JSON
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
