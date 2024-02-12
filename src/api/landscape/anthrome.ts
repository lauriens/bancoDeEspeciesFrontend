import Anthrome from "../../dataModels/landscape/anthrome"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/anthrome'

async function saveAnthrome(anthrome: CreateGenericParameter) {
    return basePost<CreateGenericParameter>(controller, anthrome)
}

async function getAnthromes() {
    return baseGet<Anthrome[]>(controller)
}

export {
    saveAnthrome,
    getAnthromes
}