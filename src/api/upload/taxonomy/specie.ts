import { CreateSpecie } from "../../../dataModels/taxonomy/specie";
import { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { basePost } from "../../baseApi";

const controller = '/api/specie'

async function saveSpecie(specie: CreateTaxonomy) {
    const data = {
        Name: specie.name,
        GenusId: specie.relationshipId
    }

    return await basePost<CreateSpecie>(controller, data)
}

export {
    saveSpecie
}