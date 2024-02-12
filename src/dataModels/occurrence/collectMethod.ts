type CollectMethod = {
    id: number
    name: string
    description: string
    type: string
}

export type CreateCollectMethod = {
    name: string
    description: string
    type: number
}

export const MethodType = [
    'Direto',
    'Indireto'
]

export default CollectMethod