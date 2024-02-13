import Genus from "./genus"

type CultureSpecie = {
    id: number
    name: string
    genus: Genus
}

export type CreateCultureSpecie = {
    name: string
    genusId: number
}

export default CultureSpecie