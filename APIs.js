import express from "express";
import cors from 'cors';
import {verify_user_details,get_details_fromAPI} from "./database.js";
const app = express();
app.use(cors());
app.use(express.json())

app.get("/verifyuser",async (req,res)=>{
    try{
    const password = req.body.password;
    const email = req.body.email;
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