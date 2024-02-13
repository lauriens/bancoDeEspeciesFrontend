import AreaType from "../../../dataModels/landscape/areaType"
import LandscapePage from "../landscape/landscape"
import BiomeLandscape from "./biomeLandscape"
import FirstStep from "./firstStep"
import LandscapeAreaType from "./landscapeAreaType"
import LandscapeLocality from "./landscapeLocality"
import LandscapeMunicipality from "./landscapeMunicipality"

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
        key: 'AreaType',
        title: 'Tipo de Área'
    },
    {
        key: 'BiomeLandscape',
        title: 'Bioma'
    },
    {
        key: 'LandscapeMunicipality',
        title: 'Município'
    },
    {
        key: 'LandscapeLocality',
        title: 'Localidade'
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
        key: 'AreaType',
        content: LandscapeAreaType
    },
    {
        key: 'BiomeLandscape',
        content: BiomeLandscape
    },
    {
        key: 'LandscapeMunicipality',
        content: LandscapeMunicipality
    },
    {
        key: 'LandscapeLocality',
        content: LandscapeLocality
    }
]

export type StepProps = {
    visible?: boolean
    landscapeId?: number
    setLandscapeId?: React.Dispatch<React.SetStateAction<number>>
}

export default steps