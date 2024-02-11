import MaterialDestination, { CreateMaterialDestination, MaterialDestinationList } from "../../dataModels/reference/materialDestination"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/materialDestinations'

async function getMaterialDestinationList() {
    return await baseGet<MaterialDestinationList[]>(`${controller}/list`)
}

async function saveMaterialDestination(materialDestination: CreateMaterialDestination) {
    return await basePost(controller, materialDestination)
}

async function getMaterialDestinations() {
    return await baseGet<MaterialDestination[]>(controller)
}

export {
    getMaterialDestinationList,
    saveMaterialDestination,
    getMaterialDestinations
}