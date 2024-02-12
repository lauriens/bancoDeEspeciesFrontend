import Occurrence, { CreateOccurrence } from "../../dataModels/occurrence/occurrence";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/occurrences'

async function saveOccurrence(occurrence: CreateOccurrence) {
    return await basePost<CreateOccurrence>(controller, occurrence)
}

async function getOccurrences() {
    return await baseGet<Occurrence[]>(controller)
}

export {
    saveOccurrence, 
    getOccurrences
}