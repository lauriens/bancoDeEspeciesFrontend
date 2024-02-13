import Occurrence from "../occurrence/occurrence"
import Culture from "./culture"

type OccurrenceCulture = {
    cultureId: number
    occurrenceId: number
    stage?: string
    phenology?: string
    percentage?: number
    isMajority?: boolean
    area?: number
    productivity?: number
    occurrence?: Occurrence
    culture?: Culture
}

export type CreateOccurrenceCulture = {
    cultureId: number
    occurrenceId: number
    stage?: string
    phenology?: string
    percentage?: number
    isMajority?: boolean
    area?: number
    productivity?: number
}

export default OccurrenceCulture