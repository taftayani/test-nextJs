// This file are focusing to know api response or request

import { AxiosRequestConfig, AxiosResponse } from "axios"
import { instance } from "./instance"

/** 
    * Http Get Variable are targeting for get axios and give a response
    * url refer for url of endpoin
    * config refer for configuration when it needed 
**/
const Get = async <TData>(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> => {
    return await instance.get<AxiosResponse<TData>>(url, config)
}

const Http = {
    Get
}

export default Http