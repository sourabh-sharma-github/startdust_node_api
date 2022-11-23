const { Schema, model } = require("mongoose");
const Particles = new Schema({
    display_particle: {
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
    name: {
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
    collection: 'particles',
    timestamps: true
});


module.exports = model("Particles", Particles);