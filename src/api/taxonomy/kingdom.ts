import { CreateKingdom } from "../../dataModels/taxonomy/kingdom"
import Taxonomy, { CreateTaxonomy } from "../../dataModels/taxonomy/taxonomy"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/kingdom'

async function saveKingdom(kingdom: CreateTaxonomy) {
    const data = {
        Name: kingdom.name,
        domainId: kingdom.relationshipId
    }

    return await basePost<CreateKingdom>(controller, data)
}

async function getKingdoms() {
    return await baseGet<Taxonomy[]>(controller)
}

export {
    saveKingdom,
    getKingdoms
}