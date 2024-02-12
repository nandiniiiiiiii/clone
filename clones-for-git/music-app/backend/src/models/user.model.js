import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from 'joi-password-complexity';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    likedsong: {
        type: [String],
        default: []
    },
    playlist: {
        type: [String],
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps:true})

//user auth
userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.name,
            isAdmin: this.isAdmin
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }  
    )
}

//to validate data send by the user
const validate = (user) =>{
    const schema = Joi.object({
        name: Joi.string().min(5).max(10).required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
        month: Joi.string().required(),
        date: Joi.string().required(),
        year: Joi.string().required(),
        gender: Joi.string().valid("male","female","other").required()
    })
    return schema.validate(user)
}

const user = mongoose.model("user",userSchema);

//allow multiple export
export { user,validate }