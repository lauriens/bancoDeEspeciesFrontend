import StudyCollectMethod, { CreateStudyCollectMethod } from "../../dataModels/reference/studyCollectMethod";
import { baseGet, basePost } from "../baseApi";

const controller = '/api/studyCollectMethod'

async function saveStudyCollectMethod(studyCollectMethod: CreateStudyCollectMethod) {
    return await basePost(controller, studyCollectMethod)
}

async function getStudyCollectMethods() {
    return await baseGet<StudyCollectMethod[]>(controller)
}

export {
    saveStudyCollectMethod,
    getStudyCollectMethods
}