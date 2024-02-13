import CultureSpecie, { CreateCultureSpecie } from "../../dataModels/taxonomy/cultureSpecie";
import { CreateTaxonomy } from "../../dataModels/taxonomy/taxonomy";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/cultureSpecie'

async function saveCultureSpecie(specie: CreateTaxonomy) {
    const data = {
        name: specie.name,
        genusId: specie.relationshipId
    }

    return await basePost<CreateCultureSpecie>(controller, data)
}

async function getCultureSpecies() {
    return await baseGet<CultureSpecie[]>(controller)
}

export {
    saveCultureSpecie,
    getCultureSpecies
}