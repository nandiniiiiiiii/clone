import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { user, validate, validateinput } from '../models/users.model.js';

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body
        console.log("Email: ", email)

        if (
            [firstname, lastname, email, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "all fields are required")
        }
        const existedUser = await user.findOne({email})
        console.log(existedUser)
        if (existedUser != null) {
            throw new ApiError(409, "user already exist")
        }

        //5- send to db via obj.
        const User = await user.create({
            firstname,
            lastname,
            email,
            password,
        })

        //6- remove password and refresh token for response
        const createuser = await user.findById(User._id);

        //7- check for user created
        if (!createuser) {
            throw new ApiError(500, "something went wrong while registering user")
        }

        //8- return res
        return res.status(201).json(
            new ApiResponse(200, createuser, "user registerd successfuly")
        )





        //validate info
        // console.log("hello");
        // const {error} = validate(req.body);
        // console.log("hello");
        // if (error) {
        //     throw new ApiError(400, "invalid info")
        // }
        // console.log("hello")

        // //check if usre already exist
        // const User = await user.findOne({email:req.body.email});
        // console.log(User)
        // if (User) {
        //     throw new ApiError(401, "user already exist")
        // }
        // console.log("hello")

        // const salt = await bcrypt.genSalt(Number(process.env.SALT))
        // const hashPassword = await bcrypt.hash(req.body.password,salt);
        // console.log("hello1")

        // const newUser = await new user({ ...req.body, password: hashPassword }).save();
        // if (!newUser) {
        //     throw new ApiError(401, "user not created")
        // }
        // console.log("hello2")

        // const createuser = await user.findById(newUser._id).select(
        //     "-password"
        // )
        // if (!createuser) {
        //     throw new ApiError(500, "something went wrong while registering user")
        // }

        // return res.status(201).json(
        //     new ApiResponse(200, createuser, "user registerd successfuly")
        // )

    } catch (error) {
        return new ApiError(400, `invalid input ${error}`)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email)

        //check for username and email
        if (!email && !password) {
            throw new ApiError(400, "username or email is required")
        }
    
        const User = await user.findOne({email})
        console.log(User)
        if (!User) {
            throw new ApiError(400, "user not found")
        }
    
        const isPasswordvalid = await User.isPasswordCorrect(password);
        console.log(isPasswordvalid)
        if (!isPasswordvalid) {
            throw new ApiError(400, "invalid user credentials")
        }
    
        const loginUser = await user.findById(User._id).select("-passsword");
        console.log(loginUser);
    
        return res.status(200).json(
                new ApiResponse(200,loginUser,"User logged in Successfully")
        )





        // const { error } = validateinput(req.body);
        // if (error) {
        //     return new ApiError(400, "invalid input")
        // }

        // const User = await user.findOne({ email: req.body.email });
        // if (!User) {
        //     return new ApiError(401, "invalid email or password")
        // }

        // const validPassword = await bcrypt.compare(req.body.password, User.password);
        // if (!validPassword) {
        //     return new ApiError(401, "invalid email or password")
        // }

        // const token = User.generateAuthToken();
        // if (!token) {
        //     return new ApiError(401, "token not found")
        // }

        // return res.status(201).json(
        //     new ApiResponse(200, createuser, "user registerd successfuly")
        // )


    } catch (error) {
        return new ApiError(400, `invalid input ${error}`)
    }
}

export {
    signup,
    login
}
