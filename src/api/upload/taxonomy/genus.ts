import { CreateGenus } from "../../../dataModels/taxonomy/genus";
import { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { basePost } from "../../baseApi";

const controller = '/api/genus'

async function saveGenus(genus: CreateTaxonomy) {
    const data = {
        Name: genus.name,
        FamilyId: genus.relationshipId
    }

    return await basePost<CreateGenus>(controller, data)
}

export {
    saveGenus
}