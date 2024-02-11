import Reference, { CreateReference, ReferenceList } from "../../dataModels/reference/reference";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/reference'

async function saveReference(reference: CreateReference) {
    return await basePost<CreateReference>(controller, reference)
}

async function getReferences() {
    return await baseGet<Reference[]>(controller)
}

async function getReferenceList() {
    return await baseGet<ReferenceList[]>(`${controller}/list`)
}

export {
    saveReference,
    getReferences,
    getReferenceList
}