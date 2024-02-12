import Municipality, { CreateMunicipality } from "../../dataModels/landscape/municipality";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/municipality'

async function saveMunicipality(municipality: CreateMunicipality) {
    return await basePost<CreateMunicipality>(controller, municipality)
}

async function getMunicipalities() {
    return await baseGet<Municipality[]>(controller)
}

export {
    saveMunicipality,
    getMunicipalities
}