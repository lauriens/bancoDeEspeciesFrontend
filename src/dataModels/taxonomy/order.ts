import Class from "./class"

type Order = {
    id: number
    name: string
    classId?: number
    class?: Class
}

export type CreateOrder = {
    Name: string
    ClassId?: number
}

export default Order