import { CreateClass } from "../../dataModels/taxonomy/class"
import Taxonomy, { CreateTaxonomy } from "../../dataModels/taxonomy/taxonomy"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/class'

async function saveClass(classData: CreateTaxonomy) {
    const data = {
        Name: classData.name,
        PhylumId: classData.relationshipId
    }

    return await basePost<CreateClass>(controller, data)
}

async function getClasses() {
    return await baseGet<Taxonomy[]>(controller)
}

export {
    saveClass,
    getClasses
}