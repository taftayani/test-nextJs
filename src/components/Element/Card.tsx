import React from "react"

interface IPropsCard {
    children: React.ReactNode
}

const CardKitaBisa = (props: IPropsCard) => {
    return (
        <div className="bg-white shadow-lg rounded-xl">
            {props.children}
        </div>
    )
}

export default CardKitaBisa