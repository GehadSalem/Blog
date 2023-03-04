import articleModel from "../../../../DB/model/article.model.js";
import userModel from "../../../../DB/model/User.model.js"
import userSchema from "../user.validation.js";


export const profile = async (req, res, next) => {

    try {
        console.log({ user: req.user });

        const user = await userModel.findById(req.user._id)
        return res.json({ message: "Done", user})
    } catch (error) {
        return res.json({ message: "Catch error", error, stack: error.stack })

    }

}

export const updateUser = async (req, res, next) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.user._id, req.body, { new: true })
        return user ? res.json({ message: "Done", user })
            : res.json({ message: "In-valid Account Id" })
    } catch (error) {
        return res.json({ message: "Catch error", error })
    }

}



export const deleteUser = async (req, res, next) => {
    try {
  
        const user = await userModel.findByIdAndDelete(req.user._id)

        //delete 
        await articleModel.deleteMany({userId:user._id})
        return res.json({ message: "Done", user })
        
    } catch (error) {
        return res.json({ message: "Catch error", error , stack: error.stack})
    }

}