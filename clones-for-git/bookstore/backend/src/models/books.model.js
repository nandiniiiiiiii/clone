import mongoose from "mongoose";

const bookSchemal = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    copiesSold: {
        type: Number,
        required: true,
    },
},{
    timestamps: true,
})

export const Books = mongoose.model("Books",bookSchemal)