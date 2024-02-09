import Family from "./family"

type Genus = {
    id: number
    name: string
    familyId?: number
    family?: Family
}

export default Genus