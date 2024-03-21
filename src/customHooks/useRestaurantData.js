import { useEffect, useState } from "react"
import { RESTAURANT_API } from "../utils/api"

const useRestaurantData = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://proxy.cors.sh/' + RESTAURANT_API + resId, {
                                    headers: {
                                        'x-cors-api-key': 'temp_7a67a8affbd5ec140c6a1e41d643551b'
                                    }
                                })
        const json = await data.json()
        setResInfo(json)
    }

    return resInfo
}

export default useRestaurantData;