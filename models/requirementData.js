//import modules & Dependencies
const Mongoose = require("mongoose")
const Joi = require("joi");
const { string, required } = require("joi");

//To carry out schema updation after assign faculty to curriculum
function ifAssigned() {
    return this.assigned

}

//Define Schema
const RequirementSchema = Mongoose.Schema;
const RequirementData = RequirementSchema({
    ReqName: {
        type: String,
        required: true
    },
    trainingArea: {
        type: String,
        required: true
    },
    reqCategory: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    refFile: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    download: { type: String },

    createdAt: Date,
    updatedAt: Date,

    assignedFaculty: {
        type: Object
    }
    //     assigned: Boolean,

    //     userName: {
    //         type: String,
    //         required: ifAssigned,
    //         minlength: 3,
    //         maxlength: 50,
    //     },

    //     employeeId: {
    //         type: Number,
    //         required: ifAssigned,
    //         minlength: 1,
    //         maxlength: 25,
    //         unique: true
    //     },
    //     email: {
    //         type: String,
    //         required: ifAssigned,
    //         minlength: 5,
    //         maxlength: 200,
    //         unique: true
    //     },
    //     comment: {
    //         type: String,
    //         required: ifAssigned
    //     },

    //     resFile: {
    //         type: String,
    //         required: ifAssigned
    //     },
    //     status: {
    //         type: String,
    //         required: ifAssigned
    //     }
    // }
})


RequirementModel = Mongoose.model("requirements", RequirementData);

//Auto set Status to pending
RequirementData.pre('save', function (next) {
    console.log("check")
    this.status = "pending"
    next()
});

//Backend Validation using Joi
function validateRequirement(RequirementModel) {

    const schema = {
        reqName: Joi.string(),
        trainingArea: Joi.string(),
        reqCategory: Joi.string(),
        institution: Joi.string(),
        duration: Joi.string(),
        refFile: Joi.string(),
        comment: Joi.string(),
        resFile: Joi.string(),
        userName: Joi.string().min(3).max(50).required(),
        employeeId: Joi.number().min(1).max(25).unique().required(),
    }
    return Joi.validate(RequirementModel, schema);

}

//Export Modules
module.exports = RequirementModel;
exports.validate = validateRequirement;