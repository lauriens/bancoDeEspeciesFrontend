import Order from "./order"

type Family = {
    id: number
    name: string
    orderId?: number
    order?: Order
}

export default Family