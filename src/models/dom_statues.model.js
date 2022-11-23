const { Schema, model } = require("mongoose");
const DomStatues = new Schema({
    "position": {
        type: Number,
        default: null,
    },
    statue_type: {
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
    kiosk_type: {
        type: String,
        default: null,
    },
    version: {
        type: Number,
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
    collection: 'dom_statues',
    timestamps: true
});


module.exports = model("DomStatues", DomStatues);