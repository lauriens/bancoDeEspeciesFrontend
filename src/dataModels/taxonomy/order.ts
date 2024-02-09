import Class from "./class"

type Order = {
    id: number
    name: string
    classId?: number
    class?: Class
}

export default Order