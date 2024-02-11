import ReferenceType from "./referenceType"
import StudyCollectMethod from "./studyCollectMethod"

type Reference = {
    id: number
    title: string
    authorName: string
    year: number
    referenceType: ReferenceType
    studyCollectMethods?: StudyCollectMethod[]
}

export type CreateReference = {
    title: string
    authorName: string
    year: number
    referenceTypeId: number
}

export default Reference