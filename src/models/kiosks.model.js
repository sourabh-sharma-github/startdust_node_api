const { Schema, model } = require("mongoose");
const Animations = new Schema({
    "position": {
        type: Number,
        default: null,
    },
    heading: {
        type: String,
        default: null,
    },
    discription: {
        type: String,
        default: null,
    },
    link: {
        type: String,
        default: null,
    },
    version: {
        type: Number,
        default: null,
    },
    kiosk_type: {
        type: String,
        default: null,
    },
    shop_id: {
        type: Number,
        required: 'shop_id is required',
    },
    created_at: {
        type: String,
        required: 'created_at is required',
    },
    updated_at: {
        type: String,
        required: 'updated_at is required',
    },
    statue_type: {
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
    collection: 'animations',
    timestamps: true
});


module.exports = model("Animations", Animations);