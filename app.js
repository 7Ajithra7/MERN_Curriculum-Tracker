
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


// test api
// app.use('/',AppRouter)



//DashBoard Api
//Admin Module:
//Faculty Module:
//Apis


// router.get('/', function (req, res, next) {
// 	return res.render('index.ejs');
// });


// app.post('/', function(req, res, next) {
// 	console.log(req.body);
// 	var personInfo = req.body;


// 	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
// 		res.send();
// 	} else {
// 		if (personInfo.password == personInfo.passwordConf) {

// 			User.findOne({email:personInfo.email},function(err,data){
// 				if(!data){
// 					var c;
// 					User.findOne({},function(err,data){

// 						if (data) {
// 							console.log("if");
// 							c = data.unique_id + 1;
// 						}else{
// 							c=1;
// 						}

// 						var newPerson = new User({
// 							unique_id:c,
// 							email:personInfo.email,
// 							username: personInfo.username,
// 							password: personInfo.password,
// 							passwordConf: personInfo.passwordConf
// 						});

// 						newPerson.save(function(err, Person){
// 							if(err)
// 								console.log(err);
// 							else
// 								console.log('Success');
// 						});

// 					}).sort({_id: -1}).limit(1);
// 					res.send({"Success":"You are regestered,You can login now."});
// 				}else{
// 					res.send({"Success":"Email is already used."});
// 				}

// 			});
// 		}else{
// 			res.send({"Success":"password is not matched"});
// 		}
// 	}
// });

// app.get('/login', function (req, res, next) {
// 	return res.render('login.ejs');
// });

// app.post('/login', function (req, res, next) {
// 	//console.log(req.body);
// 	User.findOne({email:req.body.email},function(err,data){
// 		if(data){
			
// 			if(data.password==req.body.password){
// 				//console.log("Done Login");
// 				req.session.userId = data.unique_id;
// 				//console.log(req.session.userId);
// 				res.send({"Success":"Success!"});
				
// 			}else{
// 				res.send({"Success":"Wrong password!"});
// 			}
// 		}else{
// 			res.send({"Success":"This Email Is not regestered!"});
// 		}
// 	});
// });
















const PORT = process.env.PORT||7000

app.listen(PORT, ()=>{
    console.log("Curriculum Tracker Server Connected to port: ",PORT)
})
