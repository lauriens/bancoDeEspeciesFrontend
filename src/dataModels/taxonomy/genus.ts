import Family from "./family"

type Genus = {
    id: number
    name: string
    familyId?: number
    family?: Family
}

export type CreateGenus = {
    Name: string
    FamilyId?: number
}

export default Genus