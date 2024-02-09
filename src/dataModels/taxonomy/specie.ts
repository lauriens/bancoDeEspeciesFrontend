import Genus from "./genus"

type Specie = {
    id: number
    name: string
    genusId?: number
    genus?: Genus
}

export type CreateSpecie = {
    Name: string
    GenusId?: number
}

export default Specie