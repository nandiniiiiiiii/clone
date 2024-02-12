import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from 'joi-password-complexity';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
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
    }
}, { timestamps: true })

//user auth
userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
}

//to validate data send by the user
const validate = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().required().label("firstname"),
        lastname: Joi.string().required().label("lastname"),
        email: Joi.string().required().label("email"),
        password: passwordComplexity().required().label("password"),
    })
    return schema.validate(data)
}

const validateinput = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    })
    return schema.validateinput(data)
}

const user = mongoose.model("user", userSchema);

//allow multiple export
export { user, validate, validateinput }