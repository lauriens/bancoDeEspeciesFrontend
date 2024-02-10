import Reference from '../pages/reference/reference'
import Home from "../pages/home/home"
import Domain from '../pages/upload/taxonomy/forms/domain/domain'
import Kingdom from '../pages/upload/taxonomy/forms/kingdom/kingdom'
import Phylum from '../pages/upload/taxonomy/forms/phylum/phylum'
import Class from '../pages/upload/taxonomy/forms/class/class'
import Order from '../pages/upload/taxonomy/forms/order/order'
import Family from '../pages/upload/taxonomy/forms/family/family'
import Genus from '../pages/upload/taxonomy/forms/genus/genus'
import Specie from '../pages/upload/taxonomy/forms/specie/specie'
import TaxonomyTree from '../pages/upload/taxonomy/taxonomyTree/taxonomyTree'

const routes = [
    {
        element: Home(),
        children: [
            {
                path: '/',
                Component: Reference
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
            }
        ]
    }
]

export default routes