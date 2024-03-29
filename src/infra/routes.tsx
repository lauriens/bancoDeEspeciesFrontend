import Layout from "../pages/home/layout"
import Domain from '../pages/taxonomy/forms/domain/domain'
import Kingdom from '../pages/taxonomy/forms/kingdom/kingdom'
import Phylum from '../pages/taxonomy/forms/phylum/phylum'
import Class from '../pages/taxonomy/forms/class/class'
import Order from '../pages/taxonomy/forms/order/order'
import Family from '../pages/taxonomy/forms/family/family'
import Genus from '../pages/taxonomy/forms/genus/genus'
import Specie from '../pages/taxonomy/forms/specie/specie'
import TaxonomyTree from '../pages/taxonomy/taxonomyTree/taxonomyTree'
import Home from "../pages/home/home"
import ReferenceType from "../pages/reference/referenceType/referenceType"
import Reference from "../pages/reference/reference"
import StudyCollectMethod from "../pages/reference/studyCollectMethod/studyCollectMethod"
import MaterialDestination from "../pages/reference/materialDestination/materialDestination"
import FullReference from "../pages/reference/fullReference/fullReference"
import Country from "../pages/landscape/country/country"
import Uf from "../pages/landscape/uf/uf"
import ThreatDegree from "../pages/occurrence/threatDegree/threatDegree"
import CollectMethod from "../pages/occurrence/collectMethod/collectMethod"
import SampleAreaType from "../pages/landscape/sampleAreaType/sampleAreaType"
import Locality from "../pages/landscape/locality/locality"
import Occurrence from "../pages/occurrence/occurrence/occurrence"
import User from "../pages/home/user/user"
import Anthrome from "../pages/landscape/anthrome/anthrome"
import Biome from "../pages/landscape/biome/biome"
import Landscape from "../pages/landscape/landscape/landscape"
import Agroecosystem from "../pages/landscape/agroecosystem/agroecosystem"
import Municipality from "../pages/landscape/municipality/municipality"
import AreaType from "../pages/landscape/areaType/areaType"
import FullLandscape from "../pages/landscape/fullLandscape/fullLandscape"
import CultureSpecie from "../pages/taxonomy/forms/cultureSpecie/cultureSpecie"
import Culture from "../pages/culture/culture/culture"
import OccurrenceCulture from "../pages/culture/occurrenceCulture/occurrenceCulture"
import FullCulture from "../pages/culture/fullCulture/fullCulture"
import Abundance from "../pages/occurrence/abundance/abundance"
import ErrorPage from "../pages/home/error"
import React from "react"

const routes = [
    {
        element: Layout(),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/specie',
                Component: Specie
            },
            {
                path: '/dominio',
                Component: Domain
            },
            {
                path: '/reino',
                Component: Kingdom
            },
            {
                path: '/filo',
                Component: Phylum
            },
            {
                path: '/classe',
                Component: Class
            },
            {
                path: '/ordem',
                Component: Order
            },
            {
                path: '/familia',
                Component: Family
            },
            {
                path: '/genero',
                Component: Genus
            },
            {
                path: '/especie',
                Component: Specie
            },
            {
                path: '/taxonomia',
                Component: TaxonomyTree
            },
            {
                path: '/referenceType',
                Component: ReferenceType
            },
            {
                path: '/reference',
                Component: Reference
            },
            {
                path: '/metodoColetaEstudo',
                Component: StudyCollectMethod
            },
            {
                path: '/destinoMaterial',
                Component: MaterialDestination
            },
            {
                path: '/estudo',
                Component: FullReference
            },
            {
                path: '/pais',
                Component: Country
            },
            {
                path: '/uf',
                Component: Uf
            },
            {
                path: '/ameaca',
                Component: ThreatDegree
            },
            {
                path: '/metodoColetaOcorrencia',
                Component: CollectMethod
            },
            {
                path: '/tipoAreaAmostra',
                Component: SampleAreaType
            },
            {
                path: '/localidade',
                Component: Locality
            },
            {
                path: '/ocorrencia',
                Component: Occurrence
            },
            {
                path: '/user',
                Component: User
            },
            {
                path: '/antroma',
                Component: Anthrome
            },
            {
                path: '/bioma',
                Component: Biome
            },
            {
                path: '/paisagem',
                Component: Landscape
            },
            {
                path: '/agroecossistema',
                Component: Agroecosystem
            },
            {
                path: '/municipio',
                Component: Municipality
            },
            {
                path: '/tipoArea',
                Component: AreaType  
            },
            {
                path: '/paisagemCompleta',
                Component: FullLandscape
            },
            {
                path: '/especieCultura',
                Component: CultureSpecie
            },
            {
                path: '/cultura',
                Component: Culture
            },
            {
                path: '/culturaOcorrencia',
                Component: OccurrenceCulture
            },
            {
                path: '/culturaCompleta',
                Component: FullCulture
            },
            {
                path: '/abundancia',
                Component: Abundance
            }
        ]
    }
]

export default routes