import Uf, { CreateUf } from "../../dataModels/landscape/uf"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/uf'

async function getUfs() {
    return await baseGet<Uf[]>(controller)
}

async function saveUf(uf: CreateUf) {
    return await basePost<CreateUf>(controller, uf)
}

export {
    getUfs,
    saveUf
}