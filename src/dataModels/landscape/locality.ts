import SampleAreaType from "./sampleAreaType"

type Locality = {
    id: number
    name: string
    latitude: number
    longitude: number
    sampleAreaType: SampleAreaType
}

export type CreateLocality = {
    name: string
    latitude: number
    longitude: number
    sampleAreaTypeId: number
}

export default Locality