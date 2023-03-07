//import modules & Dependencies
var RequirementModel = require("../models/requirementData");
const JWT = require("jsonwebtoken");
const { response } = require("express");
// const fs = require("fs");


//Requirement Form input function
const ReqFormControllers = {


    // Create Requirement Form By Admin
    addReqForm: async (req, res) => {
        console.log(req)
        const url = req.protocol + '://' + req.get('host')
        try {

            let data = {
                ReqName: req.body.ReqName,
                trainingArea: req.body.trainingArea,
                reqCategory: req.body.reqCategory,
                institution: req.body.institution,
                duration: req.body.duration,
                refFile: req.file.filename,
                status: 'pending',
                download: url + '/uploads/' + req.file.filename,
                createdAt:new Date()
            }
            console.log(data);

            const newReq = new RequirementModel(data);
            newReq.save((err, data) => {
                if (err) {
                    res.json({ "error": err });
                } else {
                    res.json({ "status": "success", "data": data })
                }
            });


        } catch (error) {
            console.log(error)
        }
    },
    // updateReqFormFile
    updateReqFormFile: async (req, res) => {
        console.log(req)
        let _id = req.params._id
        let resFile = req.query.resFile
        const url = req.protocol + '://' + req.get('host')
        try {

            let data = {
                ReqName: req.body.ReqName,
                trainingArea: req.body.trainingArea,
                reqCategory: req.body.reqCategory,
                institution: req.body.institution,
                duration: req.body.duration,
                refFile: req.file.filename,
                download: url + '/uploads/' + req.file.filename,
                updatedAT:new Date()
            }
            if (resFile) {
                data = {
                    "assignedFaculty.resFile": req.file.filename,
                    "assignedFaculty.comment": req.body.comment,
                    "assignedFaculty.download": url + '/uploads/' + req.file.filename,
                }
            }
            console.log(data);

            RequirementModel.updateOne({ _id }, data)
                .then((data) => {
                    res.json({ "status": "success", "data": data })
                })
                .catch((err) => {
                    res.json({ "error": err });
                })
        } catch (error) {
            console.log(error)
        }
    },
    // View Requirement Form
    viewReq: async (req, res) => {

        console.log({ req })
        let _id = req.params.id
        RequirementModel.find({ _id })
            .then((response) => {
                res.json({ 'Status': "Success", "data": response })
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

    },

    // Update and Assign Requirement to faculty
    updateReqForm: async (req, res) => {
        let _id = req.params._id
        const assignedFaculty = req.body
        console.log({ assignedFaculty })
        await RequirementModel.updateOne({ _id }, assignedFaculty)
            .then(response => {
                res.json({ 'Status': "Success", "data": response })
            })
            .catch((error) => {
                console.log(error)
            })

    },

    // View All Curriculum 

    viewallCurriculum: async (req, res) => {
        let searchKey = req.query.searchKey
        console.log({ req })
        let employeeId = req.query.id
        let status = req.query.status
        let query = {}
        if (employeeId) {
            query = { employeeId }
        }
        if (status) {
            query = { status }
        }
        if (employeeId && status) {
            query = { status, "assignedFaculty.employeeId": Number(employeeId) }
        }
        if (searchKey) {
            let regex = { $in: searchKey.split(" ").map(item => new RegExp(item, 'i')) }
            console.log({ regex })
            query = {
                $or: [
                    { ReqName: regex },
                    { reqCategory: regex },
                    { institution: regex },
                    { trainingArea: regex },
                    //  {"assignedFaculty.userName": regex} 
                ]
            }

            if (employeeId) {
                query["assignedFaculty.employeeId"] = Number(employeeId)
            }
            console.log({ query })
            // $or:[$in[{data:{ReqName}},
            //     {data:{reqCategory}},
            //     {data:{institution}},
            //     {data:{trainingArea}}
            // ]]  
        }
        console.log({ query })
        RequirementModel.find(query)
            .then((response) => {
                res.json({ 'Status': "Success", "data": response })
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })


    },
    //Delete Curriculum from the View Curriculum

    deleteCurriculum: async (req, res) => {
        let _id = req.params._id

        await RequirementModel.deleteOne({ _id })
            .then(response => {
                res.json({ 'Status': "Success" })
            })
            .catch((error) => {
                res.json({ 'Status': "Failure", "message": "failure to delete" })
            })

    },

}

module.exports = ReqFormControllers;
