//import modules & Dependencies
const Express = require("express");
const multer = require("multer");
const ReqFormControllers = require("../controllers/reqform.js")
const Router = Express.Router()
const signupController = require("../controllers/signups.js");
const upload = require("../middlewares/reqformApi.js");




//Test Route
Router.get('/api/', signupController.test)

//SignUp
Router.post('/api/signup', signupController.signUps)

//Signin
Router.post('/api/signin', signupController.signIn)

//Req Form
Router.post('/api/add', upload.single("refFile"), ReqFormControllers.addReqForm)
Router.put('/api/update/:_id', upload.single("refFile"), ReqFormControllers.updateReqFormFile)
Router.put('/api/updateResFile/:_id', upload.single("resFile"), ReqFormControllers.updateReqFormFile)
//Req View
Router.get('/api/req/:id', ReqFormControllers.viewReq)

//View Users
Router.get("/api/faculties", signupController.viewFaculties)

//Update requirement Form
Router.patch("/api/updateReqForm/:_id", ReqFormControllers.updateReqForm)

//view all curriculum based on status and employeeId
Router.get("/api/viewAllCurriculum", ReqFormControllers.viewallCurriculum)

//Delete Curriculum from View Curriculum
Router.delete("/api/deleteCurriculum/:_id", ReqFormControllers.deleteCurriculum)


//Export Router
module.exports = Router;
