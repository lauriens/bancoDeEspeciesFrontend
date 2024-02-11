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
            }
        ]
    }
]

export default routes