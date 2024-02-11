import Specie, { CreateSpecie } from "../../dataModels/taxonomy/specie";
import { CreateTaxonomy } from "../../dataModels/taxonomy/taxonomy";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/specie'

async function saveSpecie(specie: CreateTaxonomy) {
    const data = {
        Name: specie.name,
        GenusId: specie.relationshipId
    }

    return await basePost<CreateSpecie>(controller, data)
}

async function getSpecies() {
    return await baseGet<Specie[]>(controller)
}

export {
    saveSpecie,
    getSpecies
}