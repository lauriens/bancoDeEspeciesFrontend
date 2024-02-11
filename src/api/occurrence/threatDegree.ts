import { CreateThreatDegree } from "../../dataModels/occurrence/threatDegree";
import { basePost } from "../baseApi";

const controller = '/api/threatDegree'

async function saveThreatDegree(threatDegree: CreateThreatDegree) {
    return await basePost<CreateThreatDegree>(controller, threatDegree)
}

export {
    saveThreatDegree
}