import Country from "../landscape/country"
import Uf from "../landscape/uf"
import Specie from "../taxonomy/specie"

type ThreatDegree = {
    id: number
    classification: string
    resolutionDate: string
    source: string
    specie: Specie
    uf?: Uf
    country?: Country
}

export type CreateThreatDegree = {
    classification: string
    resolutionDate: string
    source: number
    specieId: number
    ufId?: number
    countryId?: number
}

export const ThreatDegreeSources = [
    "Iucn",
    "Mma",
    "Uf",
    "National"
]

export default ThreatDegree