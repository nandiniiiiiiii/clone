import { Msg } from "../models/message.modle.js";

//send msg
//next- use to move to the next middle ware function
//all these are middle ware function which has a req object and res response 
const msgsend = async(req,res,next) =>{
   try {
    const {from,to,message} = req.body;
    const data  = {
        text:message,
        users: [to,from],
        sender: from,
    }
    const Data = await Msg.create(data);
    if(data) return res.status(201).send(Data);
    return res.json({msg: "Failed to add message to the data base"});
} catch (error) {
    next(error);
   }
}

//get all msg
const getallmsg = async(req,res,next) =>{
    try {
        const {from,to} = req.body;
        const message = await Msg.find({
            users: {
                $all: [to,from],
            },
        }).sort({updateAt: 1});
        const projectMessage = message.map((msg)=>{
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.text,
            };
        });
        res.json(projectMessage);
    } catch (error) {
        next(error);
    }
}

export {
    msgsend,
    getallmsg,
}