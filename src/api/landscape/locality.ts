import Locality, { CreateLocality } from "../../dataModels/landscape/locality";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/locality'

async function saveLocality(locality: CreateLocality) {
    return await basePost<CreateLocality>(controller, locality)
}

async function getLocalities() {
    return await baseGet<Locality[]>(controller)
}

export {
    saveLocality,
    getLocalities
}