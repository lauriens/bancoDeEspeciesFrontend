import ThreatDegree, { CreateThreatDegree } from "../../dataModels/occurrence/threatDegree";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/threatDegree'

async function saveThreatDegree(threatDegree: CreateThreatDegree) {
    return await basePost<CreateThreatDegree>(controller, threatDegree)
}

async function getThreatDegrees() {
    return await baseGet<ThreatDegree[]>(controller)
}

export {
    saveThreatDegree,
    getThreatDegrees
}