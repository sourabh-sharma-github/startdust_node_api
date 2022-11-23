const { Schema, model } = require("mongoose");
const ArInternalMetadata = new Schema({
    key: {
        type: String,
        require: 'key is required',
    },
    value: {
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
    collection: 'ar_internal_metadata',
    timestamps: true
});


module.exports = model("ArInternalMetadata", ArInternalMetadata);