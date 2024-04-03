'use client'
import { PropsItem } from "@/components/Pages/CardPage/ListCardInterface"
import { useEffect, useState } from "react"

const useListCard = () => {
    const [data, setData] = useState<PropsItem[]>([])
    const apiURL = 'http://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json'
    const fetchData = async () => {
        try {
            const fetching = await (await fetch(apiURL)).json()
            setData(fetching.data.map((record: any) => {
                return {
                    img: record.image,
                    name_campaign: record.title,
                    title: record.category_name,
                    price: record.donation_target,
                    total_days: record.days_remaining,
                    is_goal: record.is_open_goal
                }
            }))
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

export default useListCard