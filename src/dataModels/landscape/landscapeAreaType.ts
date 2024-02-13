import AreaType from "./areaType"
import Landscape from "./landscape"

type LandscapeAreaType = {
    id: number
    landscape: Landscape
    areaType: AreaType
    percentage?: number
}

export type CreateLandscapeAreaType = {
    percentage: number
    landscapeId: number
    areaTypeId: number
}

export default LandscapeAreaType