import Abundance, { CreateAbundance } from "../../dataModels/occurrence/abundance";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/abundance'

async function saveAbundance(abundance: CreateAbundance) {
    return await basePost<CreateAbundance>(controller, abundance)
}

async function getFilteredAbundances(landscapeId?: number, occurrenceId?: number) {
    var query = {
        landscapeId,
        occurrenceId
    }
    return await baseGet<Abundance[]>(`${controller}/byLandscapeOrOccurrence`, query)
}

export {
    saveAbundance,
    getFilteredAbundances
}