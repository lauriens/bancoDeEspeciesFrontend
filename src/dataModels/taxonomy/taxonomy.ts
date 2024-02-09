type Taxonomy = {
    id: number
    name: string
}

export type CreateTaxonomy = {
    name: string
    relationshipId: number
}

export default Taxonomy