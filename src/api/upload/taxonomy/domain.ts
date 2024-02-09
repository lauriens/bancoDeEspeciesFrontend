import Domain, { CreateDomain } from "../../../dataModels/taxonomy/domain"
import { baseGet, basePost } from "../../baseApi"

const controller = '/api/domain'

async function saveDomain(domain: CreateDomain) {
    return await basePost(controller, domain)
}

async function getDomains() {
    return await baseGet<Domain[]>(controller)
}

export {
    saveDomain,
    getDomains
}