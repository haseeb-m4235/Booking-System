import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();    


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
}).promise()

let password=0;
let email="";
export async function get_details_fromAPI(pass,mail) {
    password=pass;
    email=mail;
    
}

export async function verify_user_details() {
    try{
    console.log("email is",email,"password is",password)
    const result= await pool.query("SELECT Name,UserID FROM user where password = ? AND email = ?",[password,email])
    console.log(result[0])
    if(result.length == 0){
        return false
    }
    
    return result[0]
}
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
    
}

export async function signupuser(password,email,name,contactnumber) {
    try{
    console.log("email is",email,"password is",password," name is",name)
    await pool.query("INSERT INTO user (Name,Email,password,ContactDetails) VALUES (?,?,?,?)",[name,email,password,contactnumber])
    console.log("Data is sent successfully to sql");
}
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
    
}