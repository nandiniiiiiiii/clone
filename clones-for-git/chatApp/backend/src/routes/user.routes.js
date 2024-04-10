import {Router} from "express";
import { register,login,allcontact} from "../controlers/user.controlers.js";

const User = Router();
User.route('/register').post(register);
User.route('/login').post(login);
User.route('/allcontact/:_id').get(allcontact);

export {
    User,
}