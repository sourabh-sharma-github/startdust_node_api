const { Schema, model } = require("mongoose");
const ActiveStorageVariantRecords = new Schema({
    blob_id: {
        type: String,
        required: 'key is required',
    },
    variation_digest: {
        type: String,
        required: 'varaiation_digest is required',
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
    collection: 'active_storage_variant_records',
    timestamps: true
});


module.exports = model("ActiveStorageVariantRecords", ActiveStorageVariantRecords);