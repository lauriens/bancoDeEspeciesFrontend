import LandscapeStatistic, { CreateLandscapeStatistic } from "../../dataModels/landscape/landscapeStatistic";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/landscapestatistics'

async function saveLandscapeStatistic(statistic: CreateLandscapeStatistic) {
    return await basePost<CreateLandscapeStatistic>(controller, statistic)
}

async function getLandscapeStatistics(landscapeId: number) {
    return await baseGet<LandscapeStatistic[]>(`${controller}/landscape/${landscapeId}`)
}

export {
    saveLandscapeStatistic,
    getLandscapeStatistics
}