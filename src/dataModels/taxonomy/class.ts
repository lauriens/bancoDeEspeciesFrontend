import Phylum from "./phylum"

type Class = {
    id: number
    name: string
    phylumId?: number
    phylum?: Phylum
}

export default Class