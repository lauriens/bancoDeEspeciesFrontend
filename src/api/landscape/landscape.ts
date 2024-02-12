import Landscape, { CreateLandscape } from "../../dataModels/landscape/landscape";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/landscape'

async function saveLandscape(landscape: CreateLandscape) {
    return await basePost<CreateLandscape>(controller, landscape)
}

async function getLandscapes() {
    return await baseGet<Landscape[]>(controller)
}

export {
    saveLandscape,
    getLandscapes
}