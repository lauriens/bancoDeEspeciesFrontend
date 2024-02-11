type MaterialDestination = {
    id: number
    name: string
    description: string
    gbifId: string
}

export type MaterialDestinationList = {
    id: number
    name: string
}

export type CreateMaterialDestination = {
    name: string
    description?: string
    gbifId?: string
}

export default MaterialDestination