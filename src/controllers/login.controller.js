import { usersService } from "../services/user.service.js"
import httpStatus from "http-status"

export async function newUser(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await usersService.signUp(name, email, password)

        res.status(httpStatus.CREATED).send(user)
    } catch (err) {
        if (err.name === 'Conflit') return res.status(httpStatus.CONFLICT).send(err.message)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function login(req, res) {
    const { email, password } = req.body

    try {
        const user = await usersService.signIn(email, password)

        res.status(httpStatus.OK).send(user)
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}