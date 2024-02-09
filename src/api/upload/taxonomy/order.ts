import { CreateOrder } from "../../../dataModels/taxonomy/order";
import Taxonomy, { CreateTaxonomy } from "../../../dataModels/taxonomy/taxonomy";
import { baseGet, basePost } from "../../baseApi";

const controller = '/api/order'

async function saveOrder(order: CreateTaxonomy) {
    const data = {
        Name: order.name,
        ClassId: order.relationshipId
    }

    return await basePost<CreateOrder>(controller, data)
}

async function getOrders() {
    return await baseGet<Taxonomy[]>(controller)
}

export {
    saveOrder,
    getOrders
}