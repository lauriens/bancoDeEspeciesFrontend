import Reference from '../pages/reference/reference'
import Specie from "../pages/specie/specie"
import Home from "../pages/home/home"
import Domain from '../pages/upload/taxonomy/forms/domain/domain'
import Kingdom from '../pages/upload/taxonomy/forms/kingdom/kingdom'

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
            }
        ]
    }
]

export default routes