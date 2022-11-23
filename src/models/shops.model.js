const { Schema, model } = require("mongoose");
const Animations = new Schema({
    name: {
        type: String,
        default: null,
    },
    shop_type: {
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
    kisok: {
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