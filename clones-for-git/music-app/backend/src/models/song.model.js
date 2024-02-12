import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const songSchema = new Schema({
    songName: {
        type: string,
        required: true,
    },
    artist: {
        type: string,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    img: {
        type: string,
        required: true,
    },
    song: {
        type: string,
        required: true,
    }
},{timestamps: true})

const validate = (song) =>{
    const schema = Joi.object({
        songName: Joi.string().required(),
        artist: Joi.string().required(),
        duration: Joi.string().required(),
        img: Joi.string().required(),
        song: Joi.number().required(),
    })
    return schema.validate(song)
}

const song = mongoose.model("song",songSchema);

module.exports = {song,validate}