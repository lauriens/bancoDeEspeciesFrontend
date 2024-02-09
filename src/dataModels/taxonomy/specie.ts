import Genus from "./genus"

type Specie = {
    id: number
    name: string
    genusId?: number
    genus?: Genus
}

export default Specie