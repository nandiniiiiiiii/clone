import {Router} from "express";
import { register,login,allcontact,logOut} from "../controlers/user.controlers.js";

const User = Router();
User.route('/register').post(register);
User.route('/login').post(login);
User.route('/logout').get(logOut);
User.route('/allcontact/:_id').get(allcontact);

export {
    User,
}