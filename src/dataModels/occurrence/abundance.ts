import Landscape from "../landscape/landscape"
import Occurrence from "./occurrence"

type Abundance = {
    id: number
    abundanceValue: string
    landscape?: Landscape
    occurrence?: Occurrence
}

export type CreateAbundance = {
    abundanceValue: string
    landscapeId?: number
    occurrenceId?: number
}

export default Abundance