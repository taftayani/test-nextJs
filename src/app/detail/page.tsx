'use client'
import useListPage from "@/hooks/useListPage"

export default function Detail() {
    const listPage = useListPage()
    console.log('list', listPage.data)
    return (
        <>
            <h1>Details Page</h1>
        </>
    )
}