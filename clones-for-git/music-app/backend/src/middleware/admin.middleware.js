import { Jwt } from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";

export const verifyJWT =  async(req,res,next)=>{
    const token = req.header("x-auth-token");
    if(!token){
        return new ApiError(400,"token not found")
    }
    Jwt.varify(token,process.env.ACCESS_TOKEN_SECRET,(error,validToken)=>{
        if(error){
            return new ApiError(400,"Invalid token")
        }else{
            if(!validToken.isAdmin){
                return 
            }
            req.user = validToken;
            next();
        }
    })
}

