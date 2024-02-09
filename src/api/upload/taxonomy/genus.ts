import { CreateGenus } from "../../../dataModels/taxonomy/genus";
import Taxonomy, { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { baseGet, basePost } from "../../baseApi";

const controller = '/api/genus'

async function saveGenus(genus: CreateTaxonomy) {
    const data = {
        Name: genus.name,
        FamilyId: genus.relationshipId
    }

    return await basePost<CreateGenus>(controller, data)
}

async function getGena() {
    return await baseGet<Taxonomy[]>(controller)
}

export {
    saveGenus,
    getGena
}