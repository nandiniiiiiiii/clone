import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const playlistSchema = new Schema({
    name: {
        type: string,
        required: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    desc: {
        type: string,
        required: true,
    },
    song: {
        type: [string],
        default: [],
        required: true
    },
    img: {
        type: string,
    }
})

const validate = (playlist) =>{
    const schema = Joi.object({
        name: Joi.string().required(),
        user: Joi.string().required(),
        desc: Joi.string().allow(""),
        song: Joi.array().items(Joi.string()),
        img: Joi.string().allow(""),
    })
    return schema.validate(playlist)
}

const playlist = mongoose.model("playlist",playlistSchema);

module.exports = {playlist,validate}