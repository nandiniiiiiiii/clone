import {Router} from "express";
import { msgsend, getallmsg } from "../controlers/message.controlers.js";

const Msg = Router();
Msg.route('/msgsend').post(msgsend);
Msg.route('/getallmsg').post(getallmsg);

export {
    Msg,
}