const { Schema, model } = require("mongoose");
const StartPopups = new Schema({
    display_message: {
        type: String,
        default: null,
    },
    message: {
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
    version: {
        type: Number,
        default: null,
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
    collection: 'start_popups',
    timestamps: true
});


module.exports = model("StartPopups", StartPopups);