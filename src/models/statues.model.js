const { Schema, model } = require("mongoose");
const Statues = new Schema({
    "position": {
        type: String,
        default: null,
    },
    statue_type: {
        type: String,
        default: null,
    },
    side: {
        type: String,
        default: null,
    },
    floor: {
        type: String,
        default: null,
    },
    sponser_name: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    link: {
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
        type: String,
        default: null,
    },
    kiosk_type: {
        type: String,
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
    collection: 'Statues',
    timestamps: true
});


module.exports = model("Statues", Statues);