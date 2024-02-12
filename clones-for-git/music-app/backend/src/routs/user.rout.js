import {Router} from "express";
import { signup,login } from '../controlers/user.controler.js';

const UserRouter = Router();
UserRouter.route("/signup").post(signup)
UserRouter.route("/login").post(login)

export default UserRouter;
