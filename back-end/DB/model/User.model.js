
import { Schema, model, Types } from 'mongoose'

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    // gender: {
    //     type: String,
    //     default: "Male",
    //     enum: ['Male', 'Female']
    // },
    age: Number,
    // phoneNum: Number
}, {
    timestamps: true
})


const userModel  = model('User' , userSchema)
export default userModel

