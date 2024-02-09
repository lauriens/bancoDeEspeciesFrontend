import { AxiosResponse } from "axios";
import GetResponse from "../dataModels/getResponse";
import SaveResponse from "../dataModels/saveResponse";
import { axiosInstance } from "../infra/apiConfig";

async function basePost<T>(url: string, data: T): Promise<SaveResponse> {
    try {
        const response = await axiosInstance.post<void, AxiosResponse<void>, T>(url, data)
        
        if (response.status == 201) return { success: true }

        return {
            success: false,
            error: response.statusText
        }
    } catch (e) {
        return {
            success: false,
            error: 'Um erro inesperado aconteceu.'
        }
    }
}

async function baseGet<T>(url: string): Promise<GetResponse<T>> {
    try {
        var response = await axiosInstance.get<T>(url)

        if (response.status == 200)
            return {
                success: true,
                data: response.data
            }
        
        return {
            success: false,
            error: response.statusText
        }
    }
    catch (e) {
        return {
            success: false,
            error: 'Não foi possível buscar os dados.'
        }
    }

    
}

export { basePost, baseGet }