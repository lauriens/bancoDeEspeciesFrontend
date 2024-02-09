import Domain, { CreateDomain } from "../../../dataModels/taxonomy/domain"
import { baseGet, basePost } from "../../baseApi"

async function saveDomain(domain: CreateDomain) {
    return await basePost('/api/domain', domain)
}

async function getDomains() {
    return await baseGet<Domain[]>('api/domain')
}

export {
    saveDomain,
    getDomains
}