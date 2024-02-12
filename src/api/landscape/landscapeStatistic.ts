import { CreateLandscapeStatistic } from "../../dataModels/landscape/landscapeStatistic";
import { basePost } from "../baseApi";

const controller = '/api/landscapestatistics'

async function saveLandscapeStatistic(statistic: CreateLandscapeStatistic) {
    return await basePost<CreateLandscapeStatistic>(controller, statistic)
}

export {
    saveLandscapeStatistic
}