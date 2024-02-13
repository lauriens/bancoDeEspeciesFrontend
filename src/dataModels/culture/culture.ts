import CultureSpecie from "../taxonomy/cultureSpecie"
import Landscape from "../landscape/landscape"

type Culture = {
    id: number
    commonName: string
    variety: string
    phenology: string
    plantedArea: number
    timeSincePlanting: number
    timeSincePlantingUnit: string
    speciesType: string
    specie: CultureSpecie
    landscape: Landscape
}

export type CreateCulture = {
    commonName: string
    variety: string
    phenology: string
    plantedArea: number
    timeSincePlanting: number
    timeSincePlantingUnit: number
    speciesType: number
    specieId: number
    landscapeId: number
}

export const timeSincePlantingUnits = [
    'Dias',
    'Meses',
    'Anos'
]

export const SpecieTypes = [
    'Pasture',
    'ExoticPasture',
    'Plantation',
    'Other'
]

export default Culture