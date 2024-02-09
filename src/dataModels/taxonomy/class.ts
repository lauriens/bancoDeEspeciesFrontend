import Phylum from "./phylum"

type Class = {
    id: number
    name: string
    phylumId?: number
    phylum?: Phylum
}

export type CreateClass = {
    Name: string
    PhylumId?: number
}

export default Class