const { Schema, model } = require("mongoose");
const ActiveStorageBlobs = new Schema({
    key: {
        type: String,
        required: 'key is required',
    },
    filename: {
        type: String,
        required: 'filename is required',
    },
    content_type: {
        type: String,
        required: 'content_type is required',
    },
    metadata: {
        type: String,
        default: null
    },
    service_name: {
        type: String,
        required: 'service_name is required',
    },
    byte_size: {
        type: Number,
        required: 'byte_size is required',
    },
    checksum: {
        type: String,
        required: 'byte_size is required',
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
    collection: 'active_storage_blobs',
    timestamps: true
});


module.exports = model("ActiveStorageBlobs", ActiveStorageBlobs);