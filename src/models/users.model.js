const { Schema, model } = require("mongoose");

const validateEmail = function(string) {
    var re = /^\w[A-Z, 2]-\d{2,2}-\w[A-Z, 2]-\d{4,4}$/;
    return re.test(string)
};

const Users = new Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    emailVerifiedAt: {
        type: Date,
        default: null
    },
    otp: {
        type: Number,
        min: [6, 'Required 6 digit OTP, got {VALUE}'],
        max: [6, 'Required 6 digit OTP, got {VALUE}'],
        default: null
    },
    signUpType: {
        type: String,
        enum: {
            values: ['Email', 'Google', 'Apple', 'Facebook'],
            message: '{VALUE} is not valid user type'
        },
        required: 'signUpType is required',
    },
    status: {
        type: String,
        enum: {
            values: ['Active', 'InActive', 'Deleted'],
            message: '{VALUE} is not valid status'
        },
        required: 'userType is required',
        default: "Active"
    },
}, {
    collection: 'users',
    timestamps: true
});


module.exports = model("Users", Users);


