import { Schema, model, Types } from 'mongoose'
const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})
const articleModel  = model("Article" , articleSchema)
export default articleModel