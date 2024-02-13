import LandscapeLocality from "../../dataModels/landscape/landscapeLocality";
import { basePost } from "../baseApi";

const controller = '/api/landscapeLocality'

async function saveLandscapeLocality(landscapeLocality: LandscapeLocality) {
    return basePost<LandscapeLocality>(controller, landscapeLocality)
}

export {
    saveLandscapeLocality
}