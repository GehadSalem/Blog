
import userModel from "../../../../DB/model/User.model.js";
import { generateToken } from "../../../utils/generateAndVerifyToken.js";
import { compare, hash } from "../../../utils/HashAndCompare.js";



export const signup = async (req, res, next) => {
    try {

        const { email, userName, password, age, cPassword } = req.body;
       
        const checkUser = await userModel.findOne({ email })
        if (checkUser) {
            return res.json({ message: "Email Exist" })
        }
        const hashPassword = hash({ plaintext: password })
        const user = await userModel.create({ email, userName, password: hashPassword, age, cPassword})

        return res.json({ message: "Done", user })
    } catch (error) {

        return res.json({ message: "catch error",   error , stack: error.stack  })
    }
}


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ message: "In-valid Email" })
        }
        console.log({ FE: password, DB: user.password });
      
        const match = compare({plaintext:password , hashValue:user.password})
        console.log(match);
        if (!match) {
            return res.json({message:"In-valid Password"})
        }
        const token  = generateToken({
            payload: {id: user._id, isLoggedIn: true},
            expiresIn: 60 * 60 * 24 * 30
        })
        await userModel.findByIdAndUpdate(user._id, {isLoggedIn: true})
        return res.json({message: "Done", token})
    } catch (error) {

        return res.json({ message: "catch error", error , stack: error.stack })
    }
}


export const logout = async (req, res, next) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.user._id, {isLoggedIn: false})
        res.json({message:"ldone", user})
    } catch (error) {
        return res.json({ message: "catch error", error , stack: error.stack })
    }
}