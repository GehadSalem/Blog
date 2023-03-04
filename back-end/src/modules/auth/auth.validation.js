import joi from 'joi'

export const signup = joi.object({
    userName: joi.string().alphanum().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    cPassword: joi.string().valid(joi.ref('password')).required(),
    age: joi.number().min(15).max(90)

}).required()


//password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


//userName: /[a-zA-Z\u0621-\u062Aء-ئ][^#&<>\"~;$^%{}?]{1-,20}$/


//


export const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required()
}).required()