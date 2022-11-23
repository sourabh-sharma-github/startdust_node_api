const { Schema, model } = require("mongoose");

const validateEmail = function(string) {
    var re = /^\w[A-Z, 2]-\d{2,2}-\w[A-Z, 2]-\d{4,4}$/;
    return re.test(string)
};

const Users = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    encrypted_password: {
        type: Number,
        default: null,
    },
    reset_password_token: {
        type: Number,
        default: null,
    },
    reset_password_sent_at: {
        type: Number,
        default: null,
    },
    remember_created_at: {
        type: String,
        default: null,
    },
    created_at: {
        type: String,
        required: 'created_at is required',
    },
    updated_at: {
        type: String,
        required: 'updated_at is required',
    }, 
    phone_number: {
        type: Number,
        default: null,
    },
    otp: {
        type: Number,
        min: [6, 'Required 6 digit OTP, got {VALUE}'],
        max: [6, 'Required 6 digit OTP, got {VALUE}'],
        default: null
    },
    otp_verified: {
        type: Boolean,
        default: null,
    },
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null  
    },
    age_group: {
        type: Number,
        default: null,
    },
    gender: {
        type: String,
        default: null,
    },
    uid: {
        type: String,
        default: null,
    },
    provider: {
        type: String,
        default: null,
    },
    last_visit: {
        type: Date,
        default: null,
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