export interface PropsItem {
    img: string,
    name_campaign: string,
    title: string,
    total_days: number,
    price: number,
    is_goal: boolean
}

export interface IPropListCard {
    Item: PropsItem[]
}

