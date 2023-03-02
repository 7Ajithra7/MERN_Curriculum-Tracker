
const Express = require("express")
const Mongoose = require("mongoose")
const BodyParser = require("body-parser")
const Cors = require("cors")
const JWT = require("jsonwebtoken")
const Bcrypt = require("bcrypt")
const Joi = require("joi")
require("dotenv").config()
// const signupModel = require("./models/account")
const AppRouter = require("./routers/apirouters")

const app = new Express()
app.use(Express.urlencoded({extended:false}));
app.use(Express.json())
app.use(Cors())
app.use(AppRouter)


Mongoose.connect("mongodb+srv://ajithra:ajithra@cluster000.hjf3qzh.mongodb.net/CurriculumTrackerDB?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(
    ()=>{
        console.log("DB Connected Successfully")
    })
.catch(err=>{
    console.log("DB Connection Failed",err);
    process.exit();
})


const path = require('path');
app.use(Express.static(path.join(__dirname,'/build')));
app.get("/*", function(req, res) {
res.sendFile(path.join(__dirname,'/build/index.html')); }); 













const PORT = process.env.PORT||7000

app.listen(PORT, ()=>{
    console.log("Curriculum Tracker Server Connected to port: ",PORT)
})
