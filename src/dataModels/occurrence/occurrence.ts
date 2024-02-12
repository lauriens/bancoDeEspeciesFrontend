import Locality from "../landscape/locality"
import Reference from "../reference/reference"
import Specie from "../taxonomy/specie"
import User from "../user"
import CollectMethod from "./collectMethod"
import ThreatDegree from "./threatDegree"

type Occurrence = {
    id: number
    occurrenceType: string
    isSnucOccurrence: boolean
    specie: Specie
    user: User
    locality?: Locality
    startDate?: string
    endDate?: string
    occurrenceTime?: string
    reference?: Reference
    isDuplicate?: boolean
    reviewerObservation?: string
    threatDegree?: ThreatDegree
    occurrenceColetaMethod?: CollectMethod
}

export type CreateOccurrence = {
    occurrenceType: number
    isSnucOccurrence: boolean
    specieId: number
    createdBy: number
    localityId?: number
    startDate?: string
    endDate?: string
    occurrenceTime?: string
    isDuplicate?: boolean
    reviewerObservation?: string
    threatDegreeId?: number
    occurrenceMethodId?: number
    referenceId?: number
}

export const OccurrenceTypes = [
    'InCrop',
    'OffCrop',
    'Borda',
    'ReservaLegal'
]

export default Occurrence