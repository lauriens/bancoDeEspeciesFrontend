import Culture, { CreateCulture } from "../../dataModels/culture/culture";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/culture'

async function saveCulture(culture: CreateCulture) {
    return await basePost<CreateCulture>(controller, culture)
}

async function getCultures() {
    return await baseGet<Culture[]>(controller)
}

async function getLandscapeCultures(landscapeId: number) {
    return await baseGet<Culture[]>(`${controller}/landscape/${landscapeId}`)
}

export {
    saveCulture,
    getCultures,
    getLandscapeCultures
}