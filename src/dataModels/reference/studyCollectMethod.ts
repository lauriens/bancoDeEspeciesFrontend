import MaterialDestination from "./materialDestination"
import Reference from "./reference"

type StudyCollectMethod = {
    id: number
    sampleDrawing: string
    samplingEffort: number
    samplingEffortUnit: string
    collectStartDate: string
    collectEndDate: string
    materialDestination: MaterialDestination
    reference: Reference
}

export type CreateStudyCollectMethod = {
    sampleDrawing?: number
    samplingEffort?: number
    samplingEffortUnit?: string
    collectStartDate?: string
    collectEndDate?: string
    materialDestinationId?: number
    referenceId?: number
}

export const SampleDrawings = [
    'Grid',
    'Transect',
    'Random'
]

export default StudyCollectMethod