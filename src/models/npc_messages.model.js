const { Schema, model } = require("mongoose");
const NpcMessages = new Schema({
    message_txt: {
        type: String,
        default: null,
    },
    npc_id: {
        type: String,
        required: 'npc_id is required',
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
        type: String,
        default: null
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
    collection: 'npc_messages',
    timestamps: true
});


module.exports = model("NpcMessages", NpcMessages);