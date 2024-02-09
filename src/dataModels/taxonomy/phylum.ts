import Kingdom from "./kingdom"

type Phylum = {
    id: number
    name: string
    kingdomId?: number
    kingdom?: Kingdom
}

export default Phylum