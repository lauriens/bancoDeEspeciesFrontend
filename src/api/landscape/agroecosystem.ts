import Agroecosystem, { CreateAgroecosystem } from "../../dataModels/landscape/agroecosystem"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/agroecosystem'

async function saveAgroecosystem(agroecosystem: CreateAgroecosystem) {
    return basePost<CreateAgroecosystem>(controller, agroecosystem)
}

async function getAgroecosystems() {
    return baseGet<Agroecosystem[]>(controller)
}

export {
    saveAgroecosystem,
    getAgroecosystems
}