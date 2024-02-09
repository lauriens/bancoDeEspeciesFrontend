import Kingdom from "./kingdom"

type Phylum = {
    id: number
    name: string
    kingdomId?: number
    kingdom?: Kingdom
}

export type CreatePhylum = {
    Name: string
    KingdomId?: number
}

export default Phylum