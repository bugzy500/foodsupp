import { useState } from "react"
import ShimmerLoad from "./ShimmerLoading"
import { useParams } from "react-router-dom"
import useRestaurantData from "../customHooks/useRestaurantData"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantPage = () => {

    const { resId } = useParams();
    
    const resDetails = useRestaurantData(resId)

    const [showIndex, setShowIndex] = useState(0)

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

    if (resDetails === null)
        return <ShimmerLoad/>

    const { name, cuisines, avgRating, costForTwo } = resDetails?.data?.cards[2]?.card?.card?.info

    const categories = resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
        return c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })

    console.log(categories)

    // <div key={index}>{item.card.info.name + ' - Rs.' + (Number(item.card.info.price)/100 || Number(item.card.info.defaultPrice)/100)} </div>

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <ul>
                <li>Average rating - {avgRating}</li>
                <li>Cost for 2 - { Number(costForTwo)/100 }</li>
            </ul>
            {/* <ul>
                {resDetails.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((item,index) => {
                    return (
                    <div key={index}>{item.card.info.name + ' - Rs.' + (Number(item.card.info.price)/100 || Number(item.card.info.defaultPrice)/100)} </div>
                    )
                })}
            </ul> */}
            <div className="restaurant-categories">
                {categories.map((item, index) => {
                    return (<RestaurantCategory key={index} category={item} showItem={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>)
                })}
            </div>
        </div>
        
    )
}

export default RestaurantPage