type Country = {
    id: number
    name: string
    continentName: string
}

export type CreateCountry = {
    name: string
    continentName?: string
}

export default Country