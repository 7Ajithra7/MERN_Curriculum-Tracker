//import modules & Dependencies
const Joi = require("joi");
const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt")

//Define Employee/Registered Signup DataBase
const AccountSchema = new Mongoose.Schema({
    userName : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },
    designation : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 50
    },

    employeeId : {
        type : Number,
        required :true,
        minlength : 1,
        maxlength : 25,
        unique : true
    },

    email : {
        type : String,
        required : true,
        minlength :5,
        maxlength : 200,
        unique : true
    },
    
    password : {
        type : String,
        required :true,
        minlength :8,
        maxlength : 500
    },
    
    role:{
        type:String,
    }
})


//Password hashing using Bcrypt
AccountSchema.pre('save', function (next) {
    console.log("check")
    if (this.isModified('password')) {
        Bcrypt.hash(this.password, 8, (err, hash) => {
            if (err) return next(err)
            this.password = hash;
            next()
        })
    }
});

//password Comparison
AccountSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is missing')
    try {
        const result = await Bcrypt.compare(password, this.password)
        return result;
    } catch (error) {
        console.log('Error while comparing password!', error.message)
    }
}

//Define DataBase model and define collection name
const signupModel = Mongoose.model('signups', AccountSchema);

//Backend Validation
function validateSignups(signupModel) {
    const schema = {
        userName : Joi.string().min(3).max(50).required(),
        designation : Joi.string().min(2).max(50).required(),
        employeeId : Joi.number().min(1).max(25).unique().required(),
        email : Joi.string().min(5).max(200).unique().required(),
        password :Joi.string().min(8).max(500).required()
    };
    return Joi.validate(signupModel,schema);
}

//Export modules
module.exports = signupModel;
exports.validate = validateSignups;


















// --------------

// const Mongoose = require("mongoose");
// const schema = Mongoose.Schema;

// const accountSchema = new schema({
//     userName : {type:String},
//     designation : {type:String},
//     employeeId : {type:Number},
//     emailAddress : {type:String},
//     password :  {type:String},

// })

// const AccountModel = Mongoose.model("accounts", accountSchema); 
// module.exports = AccountModel;

