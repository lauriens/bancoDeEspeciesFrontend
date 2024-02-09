import Order from "./order"

type Family = {
    id: number
    name: string
    orderId?: number
    order?: Order
}

export type CreateFamily = {
    Name: string
    OrderId?: number
}

export default Family