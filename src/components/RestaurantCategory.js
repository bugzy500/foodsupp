import { useState } from "react"

const RestaurantCategory = (props) => {
    //console.log(props)
    const { title, itemCards } = props?.category?.card?.card
    const { showItem, setShowIndex } = props
    const [ showItems, setShowItems ] = useState(true)
    const hrStyle = {
        'width': '100%',
        'marginTop': '1rem'
    }
    const handleClick = () => {
        setShowItems(!showItems)
        setShowIndex()
    }
    return ( 
    <div className="restaurant-category">
        <div className="res-cat-header" onClick={handleClick}>
            <div className="cat-title">
                {title}
            </div>
            <div className="toggle-icon">
                ⬇️
            </div>
        </div>
        {showItem && showItems ? <hr style={hrStyle}/> : <></>}
        {showItem && showItems ? (<div className="itemlist-container">
            {showItem &&  itemCards.map((item, index) => {
                return (
                <div className="item-container">
                    <div className="item-header">
                        <span>
                            {item.card.info.name}
                        </span>
                        <button>
                            Add +
                        </button>
                    </div>
                </div>
                )
            })}
        </div>) : <></>}

        
    </div> 
    )
}

export default RestaurantCategory