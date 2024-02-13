import LandscapeMunicipality from "../../dataModels/landscape/landscapeMunicipality";
import { basePost } from "../baseApi";

const controller = '/api/landscapeMunicipality'

async function saveLandscapeMunicipality(landscapeMunicipality: LandscapeMunicipality) {
    return basePost<LandscapeMunicipality>(controller, landscapeMunicipality)
}

export {
    saveLandscapeMunicipality
}