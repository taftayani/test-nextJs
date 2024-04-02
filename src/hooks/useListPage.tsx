'use client'
import ListPageRepository from "@/repository/pages/ListPages"
import axios from "axios"
import { useEffect, useState } from "react"

const useListPage = () => {
    const [data, setData] = useState()

    const fetchData = async () => {
        try {
            const { data: list } = await ListPageRepository.getListPages({
                headers: {
                    Authorization: ''
                }
            })
            setData(list)
        }
        catch (e) {
            console.log('e', e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return {
        data,
    }
}

export default useListPage