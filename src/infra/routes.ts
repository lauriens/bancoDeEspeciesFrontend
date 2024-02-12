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

const routes = [
    {
        element: Layout(),
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
            }
        ]
    }
]

export default routes