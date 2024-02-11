import { MaterialDestinationList } from "../../dataModels/reference/materialDestination"
import { baseGet } from "../baseApi"

const controller = '/api/materialDestinations'

async function getMaterialDestinationList() {
    return await baseGet<MaterialDestinationList[]>(`${controller}/list`)
}

export {
    getMaterialDestinationList
}