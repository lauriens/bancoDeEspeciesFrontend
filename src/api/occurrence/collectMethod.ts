import CollectMethod, { CreateCollectMethod } from "../../dataModels/occurrence/collectMethod";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/coletaMethod'

async function saveCollectMethod(collectMethod: CreateCollectMethod) {
    return await basePost<CreateCollectMethod>(controller, collectMethod)
}

async function getCollectMethods() {
    return await baseGet<CollectMethod[]>(controller)
}

export {
    saveCollectMethod,
    getCollectMethods
}