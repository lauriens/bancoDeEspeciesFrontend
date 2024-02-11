import { Dayjs } from "dayjs"
import MaterialDestination from "./materialDestination"

type StudyCollectMethod = {
    id: number
    sampleDrawing: string
    samplingEffort: number
    samplingUnit: string
    collectStartDate: Dayjs
    collectEndDate: Dayjs
    materialDestination: MaterialDestination
}

export type CreateStudyCollectMethod = {
    sampleDrawing: number
    samplingEffort: number
    samplingEffortUnit: string
    collectStartDate: Dayjs
    collectEndDate: Dayjs
    materialDestinationId: number
    referenceId: number
}

export const SampleDrawings = [
    'Grid',
    'Transect',
    'Random'
]

export default StudyCollectMethod