const { Schema, model } = require("mongoose");
const AdminsVideos = new Schema({
    video_url: {
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
    admin_id: {
        type: String,
        required: 'admin_id is required',
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
    collection: 'admins_videos',
    timestamps: true
});


module.exports = model("AdminsVideos", AdminsVideos);