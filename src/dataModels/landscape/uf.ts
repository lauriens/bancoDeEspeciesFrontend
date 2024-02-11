import Country from "./country"

type Uf = {
    id: number
    name: string
    abbreviation?: string
    country?: Country
}

export type CreateUf = {
    name: string
    abbreviation?: string
    countryId?: number
}

export default Uf