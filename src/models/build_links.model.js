const { Schema, model } = require("mongoose");
const BuildLinks = new Schema({
    windows_link: {
        type: String,
        default: null,
    },
    mac_link: {
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
    collection: 'build_links',
    timestamps: true
});


module.exports = model("BuildLinks", BuildLinks);