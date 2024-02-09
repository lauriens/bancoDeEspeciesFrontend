import { CreateFamily } from "../../../dataModels/taxonomy/family";
import { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { basePost } from "../../baseApi";

const controller = '/api/family'

async function saveFamily(family: CreateTaxonomy) {
    const data = {
        Name: family.name,
        OrderId: family.relationshipId
    }

    return await basePost<CreateFamily>(controller, data)
}

export {
    saveFamily
}