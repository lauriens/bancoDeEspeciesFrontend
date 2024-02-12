import User, { CreateUser } from "../../dataModels/user";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/user'

async function saveUser(user: CreateUser) {
    return await basePost<CreateUser>(controller, user)
}

async function getUsers() {
    return await baseGet<User[]>(controller)
}

export {
    saveUser,
    getUsers
}