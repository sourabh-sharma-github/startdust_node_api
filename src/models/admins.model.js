
const { Schema, model } = require("mongoose");
const Admins = new Schema({
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
    reset_password_sent: {
        type: Number,
        default: null,
    },
    remember_created: {
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
    collection: 'admins',
    timestamps: true
});


module.exports = model("Admins", Admins);