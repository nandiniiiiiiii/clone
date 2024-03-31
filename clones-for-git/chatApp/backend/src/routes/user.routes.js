import {Router} from "express";
import { register,login } from "../controlers/user.controlers.js";

const User = Router();
User.route('/register').post(register);
User.route('/login').post(login);

export {
    User,
}