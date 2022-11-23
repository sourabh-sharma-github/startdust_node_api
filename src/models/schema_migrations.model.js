const { Schema, model } = require("mongoose");
const SchemaMigrations = new Schema({
    version: {
        type: Number,
        require: 'version is required',
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
    collection: 'animations',
    timestamps: true
});


module.exports = model("SchemaMigrations", SchemaMigrations);