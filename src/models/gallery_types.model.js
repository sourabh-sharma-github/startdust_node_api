const { Schema, model } = require("mongoose");
const GalleryTypes = new Schema({
    side: {
        type: String,
        default: null,
    },
    floor: {
        type: String,
        default: null,
    },
    file_type: {
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
    collection: 'gallery_types',
    timestamps: true
});


module.exports = model("GalleryTypes", GalleryTypes);