import { CreateReferenceType } from "../../dataModels/reference/referenceType";
import { basePost } from "../baseApi";

const controller = '/api/referenceType'

async function saveReferenceType(referenceType: CreateReferenceType) {
    return await basePost<CreateReferenceType>(controller, referenceType) 
}

export {
    saveReferenceType
}