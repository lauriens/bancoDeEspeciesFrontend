import Reference from '../pages/reference/reference'
import Specie from "../pages/specie/specie"
import Home from "../pages/home/home"
import Domain from '../pages/upload/taxonomy/forms/domain/domain'
import Kingdom from '../pages/upload/taxonomy/forms/kingdom/kingdom'
import Phylum from '../pages/upload/taxonomy/forms/phylum/phylum'
import Class from '../pages/upload/taxonomy/forms/class/class'

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
            }
        ]
    }
]

export default routes