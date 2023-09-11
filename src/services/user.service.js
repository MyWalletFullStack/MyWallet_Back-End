import { badRequest } from "../errors/BadRequest.error.js";
import { usersRepository } from "../repository/user.repository.js";
import bcrypt from 'bcrypt'

async function signUp(name, email, password) {
    if (!name || !email || !password) throw badRequest()

    const user = await usersRepository.findUserByEmail(email)
    if (user) throw { name: 'Conflit', message: 'email is already in use' }

    const hash = bcrypt.hashSync(password, 10)
    await usersRepository.createUser(name, email, hash)

    return await usersRepository.findUserByEmail(email)
}

async function signIn(email, password) {
    const user = await usersRepository.findUserByEmail(email)
    if (!user) throw { name: 'Not Found', message: 'Email not found' }

    const deCryptPassword = bcrypt.compareSync(user.password, password)
    if (!deCryptPassword) throw { name: 'Bad Request', message: 'incorrect password' }
    const token = uuid()
    await db.collection("sessoes").insertOne({ token, idUser: user._id })

    return token

}

export const usersService = {
    signUp,
    signIn
}