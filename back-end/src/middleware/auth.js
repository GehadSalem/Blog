
import userModel from '../../DB/model/User.model.js';
import { verifyToken } from '../utils/generateAndVerifyToken.js';

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        console.log({ authorization });
        if (!authorization?.startsWith(process.env.BEARER_TOKEN)) {
            return res.json({ message: "In-valid bearer key or authorization" })
        }

        const token = authorization.split(process.env.BEARER_TOKEN)[1]

        if (!token) {
            return res.json({ message: "token is required" })
        }
        const decoded = verifyToken({
            token
        })

        const authUser = await userModel.findById(decoded.id).select('userName email role isLoggedIn')
        if(!authUser) {
            return res.json({message: "not register account"})
        } 
        
        if(authUser.isLoggedIn){
            console.log(authUser.isLoggedIn);
            req.user = authUser
            return next()
        } else {
            return res.json({message: "Log In first"})
        }
    
    } catch (error) {
        return res.json({ message: "Catch error" , error })
    }
}


export default auth