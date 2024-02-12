import Biome from "../../dataModels/landscape/biome"
import { baseGet, basePost } from "../baseApi"

const controller = '/api/biome'

async function saveBiome(biome: CreateGenericParameter) {
    return basePost<CreateGenericParameter>(controller, biome)
}

async function getBiomes() {
    return baseGet<Biome[]>(controller)
}

export {
    saveBiome, 
    getBiomes
}