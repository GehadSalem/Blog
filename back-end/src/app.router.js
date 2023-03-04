import authRouter from './modules/auth/auth.router.js';
import userRouter from './modules/user/user.router.js'
import articleRouter from './modules/article/article.router.js';
import connectDB from '../DB/connection.js';
import cors from 'cors'




const initApp = (app, express) => {

    app.use(cors())

    app.use(express.json({}))

    app.get('/', (req, res) => res.send('Hello World!'))

    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/article', articleRouter)

    app.use("*" , (req,res)=>{
        return res.json({message:"404 Page Not Found"})
    })

    // DB connection
    connectDB()

}


export default initApp