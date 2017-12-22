const express=require("express");
var bodyParser = require('body-parser')
const app=express();


app.set('view engine','ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"))
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/pages/home.html")
})
const routes = require("./Routes/routes.js");
app.use('',routes);
app.listen(1234,()=>{
    console.log("Server Start");
})