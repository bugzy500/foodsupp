import { useEffect, useState } from "react"

const About = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    },[])

    return (
        <div className="shimmer-load">
            <span>About</span>
            <span>
                {onlineStatus? '✅✅' : '😵😵'}
            </span>
        </div>
    )
}

export default About