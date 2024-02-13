import CreateBiomeLandscape from "../../dataModels/landscape/biomeLandscape";
import { basePost } from "../baseApi";

const controller = '/api/biomelandscape'

async function saveBiomeLandscape(biomeLandscape: CreateBiomeLandscape) {
    return await basePost<CreateBiomeLandscape>(controller, biomeLandscape)
}

export {
    saveBiomeLandscape
}