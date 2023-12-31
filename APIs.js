import express from "express";
import cors from 'cors';
import {verify_user_details,get_details_fromAPI,signupuser,get_userid_fromAPI,send_user_bookings} from "./database.js";
const app = express();
app.use(cors());
app.use(express.json())



app.post("/signupuser", async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    const name=req.body.name;
    const contactnumber=req.body.contactnumber;
    signupuser(password,email,name,contactnumber);
    console.log("Data is sent successfully to signupuser function");
    // Perform any asynchronous operations here, if needed
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching user');
  }
});



app.post("/senduserid", async (req, res) => {
  try{
  const userid = req.body.userid;
  const username=req.body.username;
  get_userid_fromAPI(userid);
  console.log("User ID is sent successfully to sql");
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching user');
  }
});

app.get("/senduserbookings",async (req,res)=>{
    try{
    const result = await send_user_bookings();
    res.json(result);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }

});







app.get("/verifyuser",async (req,res)=>{
    try{
    const result = await verify_user_details();
    res.json(result);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }

});

app.post("/senduserdata", async (req, res) => {
    try {
      const password = req.body.password;
      const email = req.body.email;
      get_details_fromAPI(password,email);
      console.log("Data is sent successfully to sql");
  
      // Perform any asynchronous operations here, if needed
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error fetching user');
    }
  });
  


app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke!");
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})