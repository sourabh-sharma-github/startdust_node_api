const { Schema, model } = require("mongoose");
const Npcs = new Schema({
    name: {
        type: String,
        default: null,
    },
    shop_id: {
        type: Number,
        required: 'shop_id is required',
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
    collection: 'npcs',
    timestamps: true
});


module.exports = model("Npcs", Npcs);