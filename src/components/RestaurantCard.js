import { RES_LOGO_BASE_URL } from "../utils/imagesLinks"


const RestaurantCard = (props) => {
    const { resData } = props
    //console.log('fooooood', resData, props)
    return (
        <div className="restaurant-card">
            <div className="res-name"> 
                {resData.info.name} 
            </div>
            <div className="res-logo"> 
                <img src={RES_LOGO_BASE_URL+resData.info.cloudinaryImageId}/>
            </div>
            <div className="res-details">
                <span>{resData.info.avgRatingString}</span>
                <span>{resData.info.costForTwo}</span>
                <span>{resData.info.cuisines.join(', ')}</span>
                {/* <span></span> */}
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        //console.log(props)
        const {resData} = props
        return (
            <div>
                <label className="rating-container">
                    Highly rated
                </label>
                <RestaurantCard resData={resData}/>
            </div>
        )
    }
}

export default RestaurantCard