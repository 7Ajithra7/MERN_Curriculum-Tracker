//import modules & Dependencies
var signupModel = require("../models/account");
const JWT = require("jsonwebtoken")

//function for working of api
const signupController = {
    test: (req, res) => {
        res.json({ "Message": "Welcome Signup API" })
    },

    //function for Registrations/Faculty api
    signUps: async (req, res) => {
        console.log(req.body)
        const newUser = new signupModel(req.body)
        await newUser.save(
            (error, data) => {
                if (error) {
                    res.json({ "Status": "Error", "Error": "Registration Failed ! Check Entered" })
                } else {
                    let token = JWT.sign({ employeeId: req.body.employeeId, role: "faculty" }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    res.json({ "Status": "Success", data, token })
                }
            })
    },
    // Function for SignIn Api
    signIn: async (req, res) => {

        const { email, password } = req.body;
        const user = await signupModel.findOne({ email })

        if (!user) return res.json({
            success: false,
            Error: 'user not found'
        })
        const isMatch = await user.comparePassword(password)
        if (!isMatch) return res.json({
            success: false,
            Error: 'incorrect password',
        })
        console.log({ user })
        const decodeData = {
            employeeId: user.employeeId,
            role: user.role || 'faculty'
        }
        console.log({ decodeData })
        const token = JWT.sign(decodeData, process.env.JWT_SECRET, { expiresIn: '1d' })
        return res.json({
            Status: "Success",
            user,
            token
        });
    },

    // Function for view Registeredd faculties List Api
    viewFaculties: async (req, res) => {

        signupModel.find({ "role": { $ne: "admin" } })
            .select("userName designation email status employeeId")
            .then((response) => {
                res.json({ 'Status': "Success", "data": response })
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


//Export Registed Users APi operations
module.exports = signupController;
