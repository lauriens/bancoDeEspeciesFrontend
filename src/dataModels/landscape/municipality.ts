import Uf from "./uf"

type Municipality = {
    id: number
    name: string
    uf: Uf
}

export type CreateMunicipality = {
    name: string
    ufId: number
}

export default Municipality