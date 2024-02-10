import ReferenceType, { CreateReferenceType } from "../../dataModels/reference/referenceType";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/referenceType'

async function saveReferenceType(referenceType: CreateReferenceType) {
    return await basePost<CreateReferenceType>(controller, referenceType) 
}

async function getReferenceTypes() {
    return await baseGet<ReferenceType[]>(controller)
}

export {
    saveReferenceType,
    getReferenceTypes
}