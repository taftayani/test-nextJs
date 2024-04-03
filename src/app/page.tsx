'use client'
import ListCard from "@/components/Pages/CardPage/ListCard";
import useListCard from "@/hooks/useListCard";

export default function Home() {
  const listPage = useListCard()
  
  return (
    <>
      <ListCard Item={listPage.data} />
    </>
  )
}
