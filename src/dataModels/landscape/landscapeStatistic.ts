import Landscape from "./landscape"

type LandscapeStatistic = {
    id: number
    name: string
    value: string
    landscape: Landscape
}

export type CreateLandscapeStatistic = {
    name: string
    value: string
    landscapeId: number
}

export default LandscapeStatistic