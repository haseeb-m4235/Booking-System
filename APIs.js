import express from "express";
import cors from 'cors';
import {verify_user_details,get_details_fromAPI,signupuser,get_userid_fromAPI,send_user_bookings,addevent,showconcerts,showbuses,showtrains
,showflights,showmovies} from "./database.js";
const app = express();
app.use(cors());
app.use(express.json())


app.post("/addevent", async (req, res) => {
  try {
    const type = req.body.type;
    const schedule = req.body.date;
    const ticket=req.body.tickets;
    const eventtime=req.body.timings;
    const venue=req.body.venue;
    const eventname=req.body.name;
    addevent(type,schedule,ticket,eventtime,venue,eventname);
    console.log("Data is sent successfully");
    // Perform any asynchronous operations here, if needed
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching user');
  }
});

app.get("/showconcerts",async (req,res)=>{
  try{
  const result = await showconcerts();
  res.json(result);
  } catch (error) {
      res.status(500).send('Error fetching users');
  }

});

app.get("/showbuses",async (req,res)=>{
  try{
  const result = await showbuses();
  res.json(result);
  } catch (error) {
      res.status(500).send('Error fetching users');
  }

});

app.get("/showtrains",async (req,res)=>{
  try{
  const result = await showtrains();
  res.json(result);
  } catch (error) {
      res.status(500).send('Error fetching users');
  }

});

app.get("/showflights",async (req,res)=>{
  try{
  const result = await showflights();
  res.json(result);
  } catch (error) {
      res.status(500).send('Error fetching users');
  }

});

app.get("/showmovies",async (req,res)=>{
  try{
  const result = await showmovies();
  res.json(result);
  } catch (error) {
      res.status(500).send('Error fetching users');
  }

});





app.post("/signupuser", async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    const name=req.body.name;
    const contactnumber=req.body.contactnumber;
    const usertype=req.body.usertype;
    signupuser(password,email,name,contactnumber,usertype);
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