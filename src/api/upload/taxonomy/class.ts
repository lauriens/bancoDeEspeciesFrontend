import { CreateClass } from "../../../dataModels/taxonomy/class"
import { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy"
import { basePost } from "../../baseApi"

const controller = '/api/class'

async function saveClass(classData: CreateTaxonomy) {
    const data = {
        Name: classData.name,
        PhylumId: classData.relationshipId
    }

    return await basePost<CreateClass>(controller, data)
}

export {
    saveClass
}