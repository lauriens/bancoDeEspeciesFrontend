import LandscapePage from "../../landscape/landscape/landscape"
import AbundancePage from "../../occurrence/abundance/abundance"
import OccurrencePage from "../../occurrence/occurrence/occurrence"
import CulturePage from "../culture/culture"
import OccurrenceCulturePage from "../occurrenceCulture/occurrenceCulture"
import FirstStep from "./firstStep"

const steps = [
    {
        key: 'FirstStep',
        title: 'Novos Parâmetros?'
    },
    {
        key: 'Landscape',
        title: 'Paisagem'
    },
    {
        key: 'Culture',
        title: 'Cultura'
    },
    {
        key: 'Occurrence',
        title: 'Ocorrência'
    },
    {
        key: 'OccurrenceCulture',
        title: 'Cultura - Ocorrência'
    },
    {
        key: 'Abundances',
        title: 'Abundâncias'
    }
]

export const stepContents = [
    {
        key: 'FirstStep',
        content: FirstStep
    },
    {
        key: 'Landscape',
        content: LandscapePage
    },
    {
        key: 'Culture',
        content: CulturePage
    },
    {
        key: 'Occurrence',
        content: OccurrencePage
    },
    {
        key: 'OccurrenceCulture',
        content: OccurrenceCulturePage
    },
    {
        key: 'Abundances',
        content: AbundancePage
    }
]

export type StepProps = {
    visible?: boolean
    landscapeId?: number
    setLandscapeId?: React.Dispatch<React.SetStateAction<number>>
    cultureId?: number
    setCultureId?: React.Dispatch<React.SetStateAction<number>>
    occurrenceId?: number
    setOccurrenceId?: React.Dispatch<React.SetStateAction<number>>
}

export default steps