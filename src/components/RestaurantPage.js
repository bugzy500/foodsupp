import { useEffect, useState } from "react"
import { RESTAURANT_API } from "../utils/api"
import ShimmerLoad from "./ShimmerLoading"
import { useParams } from "react-router-dom"
import useRestaurantData from "../customHooks/useRestaurantData"

const RestaurantPage = () => {

    const { resId } = useParams();
    
    const resDetails = useRestaurantData(resId)

    //const [resDetails, setResDetails] = useState([])

    // useEffect(() => {
    //     fetchMenu()
    // },[])

    // const fetchMenu = async () => {
    //     const data = await fetch('https://proxy.cors.sh/' + RESTAURANT_API + resId, {
    //                                 headers: {
    //                                 'x-cors-api-key': 'temp_7a67a8affbd5ec140c6a1e41d643551b'
    //                                 }
    //                             })
    //     const json = await data.json()
    //     console.log(json)

    //     setResDetails(json)

        //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card
        //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
    //}

    console.log('respage', resId, resDetails)

    if(resDetails === null)
        return <ShimmerLoad/>

    return (
        <div className="menu">
            <h1>{resDetails?.data.cards[0].card.card.info.name}</h1>
            <h2>{resDetails?.data.cards[0].card.card.info.cuisines.join(', ')}</h2>
            <ul>
                <li>Average rating - {resDetails?.data.cards[0].card.card.info.avgRating}</li>
                <li>Cost for 2 - {Number(resDetails?.data.cards[0].card.card.info.costForTwo)/100}</li>
            </ul>
            <ul>
                {resDetails.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((item,index) => {
                    return (
                    <div key={index}>{item.card.info.name + ' - Rs.' + Number(item.card.info.price)/100} </div>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default RestaurantPage