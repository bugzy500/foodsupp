import { useEffect, useState } from "react";
//import FoodData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { FOOD_API } from "../utils/api";
import ShimmerLoad from "./ShimmerLoading";
import { Link } from "react-router-dom"

function filterData(searchText, restaurants) {

    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
  
    return filterData;
}

const Body = () => {
    console.log('init body')
    const [listRestaurants, setlistRestaurants] = useState([])
    const [filterRestaurants, setFilterRestaurants] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    //let searchTerm = ''

    useEffect( () => {
       fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch('https://proxy.cors.sh/' + FOOD_API, {
                                    headers: {
                                    'x-cors-api-key': 'temp_7a67a8affbd5ec140c6a1e41d643551b'
                                    }
                                })
        const json = await data.json()

        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        setlistRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listRestaurants.length === 0 ? (<ShimmerLoad/>) : (
        <div className="body-container">
            <div className="funtions-container">
                <div className="search-container">
                    <input type="text" placeholder="Search" onChange={(e) => {
                        console.log('search', e.target.value)
                        //searchTerm = e.target.value
                        setSearchTerm(e.target.value)
                    }}></input>
                    <button className="search-button" onClick={() => {
                        const fiList = filterData(searchTerm, listRestaurants)
                        setFilterRestaurants(fiList)
                    }}>Search</button>
                </div>
                <div className="filter-button">
                    <button className="ft-btn" 
                            onClick={() => {
                            const fList = filterRestaurants.filter((res) => {
                                return res.info.avgRating > 4.3 
                                })
                                setFilterRestaurants(fList)
                            }} 
                    > 
                    {'Filter restaurants > 4.3'}
                    </button>
                </div>
            </div>
            <div className="res-container">
                {filterRestaurants.map((res) => {
                    return (<Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                            <RestaurantCard key={res.info.id} resData={res}></RestaurantCard>
                        </Link>)
                })}
            </div>
        </div>
    )
}

// abstracting logic of onCLick function to another function is causing infinite loop

export default Body


