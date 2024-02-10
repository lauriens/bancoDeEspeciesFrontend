import { CreateFamily } from "../../dataModels/taxonomy/family";
import Taxonomy, { CreateTaxonomy } from "../../dataModels/taxonomy/taxonomy";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/family'

async function saveFamily(family: CreateTaxonomy) {
    const data = {
        Name: family.name,
        OrderId: family.relationshipId
    }

    return await basePost<CreateFamily>(controller, data)
}

async function getFamilies() {
    return await baseGet<Taxonomy[]>(controller)
}

export {
    saveFamily,
    getFamilies
}