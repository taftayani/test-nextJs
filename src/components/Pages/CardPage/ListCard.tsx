import CardKitaBisa from "@/components/Element/Card"
import React from "react"
import { IPropListCard } from "./ListCardInterface"

const ListCard: React.FC<IPropListCard> = ({ Item }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {Item.map((list, index) =>
                    <CardKitaBisa key={index}>
                        <div className="grid gap-4 pb-3">
                            <img src={list.img} className="w-full h-52" />
                            <div className="px-3">
                                <h2 className="font-bold">{list.name_campaign}</h2>
                            </div>
                            <div className={`w-full h-1 ${list.is_goal ? 'bg-pink-600' : 'bg-gray-100'}`} />
                            <div className="flex justify-between px-3">
                                <div className="grid">
                                    <label className="font-semibold">{list.title}</label>
                                    <label className="font-medium text-sm">Rp. {list.price}</label>
                                </div>
                                <div className="grid">
                                    <label className="font-semibold">Sisa Hari</label>
                                    <label className="font-medium text-sm">{list.total_days}</label>
                                </div>
                            </div>
                        </div>
                    </CardKitaBisa >)}
            </div>
        </>
    )
}

export default ListCard