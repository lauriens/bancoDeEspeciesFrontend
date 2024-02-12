import AreaType from "../../dataModels/landscape/areaType"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/areaType'

async function saveAreaType(areaType: CreateGenericParameter) {
    return basePost<CreateGenericParameter>(controller, areaType)
}

async function getAreaTypes() {
    return baseGet<AreaType[]>(controller)
}

export {
    saveAreaType, 
    getAreaTypes
}