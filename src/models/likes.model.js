const { Schema, model } = require("mongoose");
const Likes = new Schema({
    gallery_image_id: {
        type: String,
        required: 'gallery_image_id is required',
    },
    created_at: {
        type: String,
        required: 'created_at is required',
    },
    updated_at: {
        type: String,
        required: 'updated_at is required',
    },
    likable_type: {
        type: Number,
        default: null,
    },
    likable_id: {
        type: Number,
        default:null,
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
    collection: 'likes',
    timestamps: true
});


module.exports = model("Likes", Likes);