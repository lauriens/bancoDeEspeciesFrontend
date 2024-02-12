import Country from "./landscape/country"

type User = {
    id: number
    fullName: string
    country?: Country
}

export type CreateUser = {
    fullName: string
    countryId?: number
}

export default User