const { Schema, model } = require("mongoose");
const ShortUrls = new Schema({
    name: {
        type: String,
        default: null,
    },
    link: {
        type: String,
        default: null,
    },
    token: {
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
    collection: 'short_urls',
    timestamps: true
});


module.exports = model("ShortUrls", ShortUrls);