const { Schema, model } = require("mongoose");
const ActiveUsers = new Schema({
    active_user: {
        type: String,
        default: null,
    },
    created_at: {
        type: String,
        required: 'creatd_at is required',
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
    collection: 'active_users',
    timestamps: true
});


module.exports = model("ActiveUsers", ActiveUsers);