import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {
        text: {
            type: String,
            require: true,
        },
        users: Array,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Msg = mongoose.model("Msg", messageSchema);