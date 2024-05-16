import { User } from "../models/user.modle.js";

//reguster
const register = async(req,res) =>{
    try {
        if(
            !req.body.username ||
            !req.body.email ||
            !req.body.password
        ){
            return res.status(400).send({
                message: 'All fields required'
            });
        }
        const Name = req.body.username;
        console.log(Name)
        const userNameCheck = await User.findOne({username: Name })
        console.log(userNameCheck)
        if(userNameCheck){
            return res.status(400).send({
                message: 'user name alrady exist'
            });
        }
        const Email = req.body.email;
        const emailCheck = await User.findOne({email: Email })
        if(emailCheck){
            return res.status(400).send({
                message: 'email name alrady exist'
            });        
        }
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }

        const user = await User.create(newUser);
        return res.status(201).send(user);

    } catch (error) {
        console.log(error);
    }
}

//login
const login = async(req,res) =>{
    try {
        if(
            !req.body.username ||
            !req.body.password
        ){
            return res.status(400).send({
                message: 'All fields required'
            });
        }
        const {username,password} = req.body;
        const user = await User.findOne({username: username})
        if(!user){
            return res.status(400).send({
                message: 'user name not found'
            });
        }
        if(password != user.password){
            return res.status(400).send({
                message: 'incorrect password'
            });
        }
        return res.status(201).send(user);

    } catch (error) {
        console.log(error);
    }
}

//allcontact
const allcontact = async(req,res,next) =>{
    try {
        const users = await User.find({ _id: { $ne: req.params.id } }).select([
            "email",
            "username",
            "_id",
        ]);
        return res.json(users);
    } catch (ex) {
        next(ex);
    }
}

const logOut = (req, res, next) => {
    try {
      if (!req.params.id) return res.json({ msg: "User id is required " });
      onlineUsers.delete(req.params.id);
      return res.status(200).send();
    } catch (ex) {
      next(ex);
    }
  };

export {
    register,
    login,
    allcontact,
    logOut,
}