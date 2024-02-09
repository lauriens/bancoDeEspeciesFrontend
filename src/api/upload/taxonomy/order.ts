import { CreateOrder } from "../../../dataModels/taxonomy/order";
import { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { basePost } from "../../baseApi";

const controller = '/api/order'

async function saveOrder(order: CreateTaxonomy) {
    const data = {
        Name: order.name,
        ClassId: order.relationshipId
    }

    return await basePost<CreateOrder>(controller, data)
}

export {
    saveOrder
}