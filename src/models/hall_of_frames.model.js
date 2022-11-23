const { Schema, model } = require("mongoose");
const HallOfFrames = new Schema({
    name: {
        type: String,
        default: null,
    },
    "position": {
        type: Number,
        default: null,
    },
    version: {
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
    collection: 'hall_of_frames',
    timestamps: true
});


module.exports = model("HallOfFrames", HallOfFrames);