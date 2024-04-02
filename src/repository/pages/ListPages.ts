import Http from "@/config/api/http";
import { AxiosRequestConfig } from "axios";

const getListPages = async (config: AxiosRequestConfig) => {
    const result = await Http.Get('', config)
    return result
}

const ListPageRepository = {
    getListPages
}

export default ListPageRepository