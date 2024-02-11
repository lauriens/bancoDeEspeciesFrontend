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

export default StudyCollectMethod