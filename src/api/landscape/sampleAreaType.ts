import SampleAreaType, { CreateSampleAreaType } from "../../dataModels/landscape/sampleAreaType";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/sampleAreaType'

async function saveSampleAreaType(sampleAreaType: CreateSampleAreaType) {
    return await basePost<CreateSampleAreaType>(controller, sampleAreaType)
}

async function getSampleAreaTypes() {
    return await baseGet<SampleAreaType[]>(controller)
}

export {
    saveSampleAreaType,
    getSampleAreaTypes
}