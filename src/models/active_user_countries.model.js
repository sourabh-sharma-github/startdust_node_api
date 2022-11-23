const { string } = require("joi");
const { Schema, model } = require("mongoose");
const ActiveUserCountries = new Schema({
    country: {
        type: String,
        default: null,
    },
    active_user: {
        type: String,
        required: 'active_user is required',
    },
    created_at: {
        type: String,
        required: 'created_at is required',
    },
    updated_at: {
        type: String,
        required: 'updated_at_user is required',
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
    collection: 'active_user_countries',
    timestamps: true
});


module.exports = model("ActiveUserCountries", ActiveUserCountries);