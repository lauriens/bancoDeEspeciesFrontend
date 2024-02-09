import Domain from "./domain"

type Kingdom = {
    id: number
    name: string
    domainId?: number
    domain?: Domain
}

export type CreateKingdom = {
    Name: string
    DomainId?: number
}

export default Kingdom