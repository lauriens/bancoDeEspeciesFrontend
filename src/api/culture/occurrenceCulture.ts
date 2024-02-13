import OccurrenceCulture, { CreateOccurrenceCulture } from "../../dataModels/culture/occurrenceCulture";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/occurrenceCulture'

async function saveOccurrenceCulture(occurrenceCulture: CreateOccurrenceCulture) {
    return await basePost<CreateOccurrenceCulture>(controller, occurrenceCulture)
}

async function getOccurrenceCultures() {
    return await baseGet<OccurrenceCulture[]>(controller)
}

export { 
    saveOccurrenceCulture,
    getOccurrenceCultures
}