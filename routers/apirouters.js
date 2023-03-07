//import modules & Dependencies
const Express = require("express");
const multer = require("multer");
const ReqFormControllers = require("../controllers/reqform.js")
const Router = Express.Router()
const signupController = require("../controllers/signups.js");
const upload = require("../middlewares/reqformApi.js");





//SignUp
Router.post('/signup', signupController.signUps)

//Signin
Router.post('/signin', signupController.signIn)

//Req Form
Router.post('/add', upload.single("refFile"), ReqFormControllers.addReqForm)
Router.put('/update/:_id', upload.single("refFile"), ReqFormControllers.updateReqFormFile)
Router.put('/updateResFile/:_id', upload.single("resFile"), ReqFormControllers.updateReqFormFile)
//Req View
Router.get('/req/:id', ReqFormControllers.viewReq)

//View Users
Router.get("/faculties", signupController.viewFaculties)

//Update requirement Form
Router.patch("/updateReqForm/:_id", ReqFormControllers.updateReqForm)

//view all curriculum based on status and employeeId
Router.get("/viewAllCurriculum", ReqFormControllers.viewallCurriculum)

//Delete Curriculum from View Curriculum
Router.delete("/deleteCurriculum/:_id", ReqFormControllers.deleteCurriculum)


//Export Router
module.exports = Router;
