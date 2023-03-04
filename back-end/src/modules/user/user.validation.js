import joi from 'joi'

const userSchema = joi.object({
    userName: joi.string().alphanum().required(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    age: joi.number()
}).required()


export default userSchema