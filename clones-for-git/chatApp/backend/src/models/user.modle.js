import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 30,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
})

export const User = mongoose.model("user", userSchema);