import { db } from "../database/dataBase.js";

function findUserByEmail(email) {
    return db.collection('users').findOne({ email })
}

function createUser(name, email, password) {
    return db.collection('users').insertOne({ name, email, password })
}

export const usersRepository = {
    findUserByEmail,
    createUser
}