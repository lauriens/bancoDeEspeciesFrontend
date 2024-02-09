import { CreatePhylum } from "../../../dataModels/taxonomy/phylum";
import Taxonomy, { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { baseGet, basePost } from "../../baseApi";

const controller = '/api/phylum'

async function savePhylum(phylum: CreateTaxonomy) {
    const data = {
        Name: phylum.name,
        DomainId: phylum.relationshipId
    }

    return await basePost<CreatePhylum>(controller, data)
}

async function getPhyla() {
    return await baseGet<Taxonomy[]>(controller)
}

export {
    savePhylum,
    getPhyla
}