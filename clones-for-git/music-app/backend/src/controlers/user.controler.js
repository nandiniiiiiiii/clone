import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import {user,validate} from '../models/user.model.js';
import bcrypt from 'bcrypt';

//req-request obj.        
//res-response obj.
const signup = async(req,res)=>{
    //to validate user/take info
    const {error} = validate(req.body);
    if(error){
        return new ApiError(400,"invalid info")
    }
    //to check whether the user already exist or not
    const User = await user.findOne({email:req.body.email})
    if(User){
        return new ApiError(401,"user already exist")
    }
    //encrypt password
    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    
    //create user
    let newUser = await new user({
        ...req.body,
        password: hashPassword
    }).save();

    //removing passwored so as to send the users info
    const createuser = await user.findById(newUser._id).select(
        "-password"
    )
    if (!createuser) {
        return new ApiError(500, "something went wrong while registering user")
    }
    
    return res.status(201).json(
        new ApiResponse(200, createuser, "user registerd successfuly")
    )
}

const login = async(req,res)=>{
    const User = await user.findOne({email:req.body.email});
    console.log(User)
    if(!User){
        return new ApiError(401,"user not found")
    }
    const validPassword = await bcrypt.compare(req.body.password,User.password);
    if(!validPassword){
        return new ApiError(401,"invalid password")
    }
    const token = User.generateAuthToken();
    if(!token){
        return new ApiError(401,"token not found")
    }
    return res.status(201).json(
      new ApiResponse(200, "user logedin successfuly")
    )
}

export {
    signup,
    login
}