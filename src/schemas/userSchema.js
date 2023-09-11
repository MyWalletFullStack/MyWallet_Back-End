import joi from "joi"
export const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required().min(4)
})
