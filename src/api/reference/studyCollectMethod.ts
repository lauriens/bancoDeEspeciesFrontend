import { CreateStudyCollectMethod } from "../../dataModels/reference/studyCollectMethod";
import { basePost } from "../baseApi";

const controller = '/api/studyCollectMethod'

async function saveStudyCollectMethod(studyCollectMethod: CreateStudyCollectMethod) {
    return await basePost(controller, studyCollectMethod)
}

export {
    saveStudyCollectMethod
}