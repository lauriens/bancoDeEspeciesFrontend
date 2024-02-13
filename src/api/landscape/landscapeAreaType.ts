import { CreateLandscapeAreaType } from "../../dataModels/landscape/landscapeAreaType";
import { basePost } from "../baseApi";

const controller = '/api/landscapeareatype'

async function saveLandscapeAreaType(landscapeAreaType: CreateLandscapeAreaType) {
    return await basePost<CreateLandscapeAreaType>(controller, landscapeAreaType)
}

export {
    saveLandscapeAreaType
}