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

let userid=0;
export async function get_userid_fromAPI(id) {
    userid=id;
    
}
export async function send_user_bookings() {
    try{
        console.log("email is",email,"password is",password)
        const result= await pool.query("SELECT category,name,date,timings,venue,tickets FROM booking where UserID = ?",[userid])
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

export async function verify_user_details() {
    try{
    console.log("email is",email,"password is",password)
    const result= await pool.query("SELECT Name,UserID,usertype FROM user where password = ? AND email = ?",[password,email])
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

export async function signupuser(password,email,name,contactnumber,usertype) {
    try{
    console.log("email is",email,"password is",password," name is",name)
    await pool.query("INSERT INTO user (Name,Email,password,ContactDetails,usertype) VALUES (?,?,?,?,?)",[name,email,password,contactnumber,usertype])
    console.log("Data is sent successfully to sql");
}
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
    
}

export async function addevent(type,schedule,ticket,eventtime,venue,eventname) {
    try{
    
    await pool.query("INSERT INTO event (type,schedule,TicketAvailability,eventtime,venue,eventname) VALUES (?,?,?,?,?,?)",[type,schedule,ticket,eventtime,venue,eventname])
    console.log("Data is sent successfully to sql");
}
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
    
}

export async function showconcerts() {
    try{
    const result= await pool.query("SELECT eventname,Schedule,eventtime,venue,TicketAvailability FROM event where type = ?",["Concert"]) 
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

export async function showbuses() {
    try{
    const result= await pool.query("SELECT eventname,Schedule,eventtime,venue,TicketAvailability FROM event where type = ?",["Bus"]) 
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

export async function showtrains() {
    try{
    const result= await pool.query("SELECT eventname,Schedule,eventtime,venue,TicketAvailability FROM event where type = ?",["Train"]) 
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

export async function showflights() {
    try{
    const result= await pool.query("SELECT eventname,Schedule,eventtime,venue,TicketAvailability FROM event where type = ?",["Flight"]) 
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

export async function showmovies() {
    try{
    const result= await pool.query("SELECT eventname,Schedule,eventtime,venue,TicketAvailability FROM event where type = ?",["Movie"]) 
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