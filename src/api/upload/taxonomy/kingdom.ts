import { CreateKingdom } from "../../../dataModels/taxonomy/kingdom"
import { basePost } from "../../baseApi"

async function saveKingdom(kingdom: CreateKingdom) {
    return await basePost('/api/kingdom', kingdom)
}

export {
    saveKingdom
}