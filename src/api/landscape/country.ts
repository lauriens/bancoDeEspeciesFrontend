import Country, { CreateCountry } from "../../dataModels/landscape/country"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/country'

async function getCountries() {
    return await baseGet<Country[]>(controller)
}

async function saveCountry(country: CreateCountry) {
    return await basePost<CreateCountry>(controller, country)
}

export {
    getCountries,
    saveCountry
}