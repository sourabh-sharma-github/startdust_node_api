const { Schema, model } = require("mongoose");
const GalleryImages = new Schema({
    floor: {
        type: String,
        default: null,
    },
    side: {
        type: String,
        required: 'created_at is required',
    },
    created_at: {
        type: String,
        required: 'created_at is required',
    },
    updated_at: {
        type: String,
        required: 'updated_at is required',
    },
    "position": {
        type: Number,
        default: null,
    },
    name: {
          type: String,
          default: null,
    },
    description: {
        type: String,
        default: null,
    },
    file_type: {
        type: String,
        default: null,
    },
    version: {
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
    collection: 'gallery_images',
    timestamps: true
});


module.exports = model("GalleryImages", GalleryImages);