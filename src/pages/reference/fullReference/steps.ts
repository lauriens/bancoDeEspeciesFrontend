import ReferenceForm from "../form"
import StudyCollectMethodForm from "../studyCollectMethod/form"
import FirstStep from "./firstStep"

const steps = [
    {
        key: 'FirstStep',
        title: 'Novos Parâmetros?'
    },
    {
        key: 'Reference',
        title: 'Referência'
    },
    {
        key: 'CollectMethods',
        title: 'Métodos de Coleta'
    }
]

export const stepContents = [
    {
        key: 'FirstStep',
        content: FirstStep
    },
    {
        key: 'Reference',
        content: ReferenceForm
    },
    {
        key: 'CollectMethods',
        content: StudyCollectMethodForm
    }
]

export type StepProps = {
    visible: boolean
}

export default steps