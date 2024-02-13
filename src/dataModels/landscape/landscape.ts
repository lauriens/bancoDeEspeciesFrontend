import Reference from "../reference/reference"
import Agroecosystem from "./agroecosystem"
import Anthrome from "./anthrome"
import Locality from "./locality"
import SampleAreaType from "./sampleAreaType"

type Landscape = {
    id: number
    latitude: number
    longitude: number
    description: string
    radius?: number
    isProtectedArea?: boolean
    agroecosystem?: Agroecosystem
    anthrome?: Anthrome
    sampleAreaType?: SampleAreaType
    reference?: Reference
    localities: Locality[]
}

export type CreateLandscape = {
    latitude: number
    longitude: number
    description: string
    radius?: number
    isProtectedArea?: boolean
    anthromeId?: number
    agroecosystemId?: number
    sampleAreaTypeId?: number
    referenceId?: number
}

export default Landscape