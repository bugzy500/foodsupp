import { CDN_LOGO } from "../utils/imagesLinks"
import { Link } from "react-router-dom"

const headerList = ['Home','About','Offers','Contact','Cart']

const Header = () => {
    console.log('header init')
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={CDN_LOGO} className="logo-img"></img> 
                <div className="logo-name">FoodSupp</div>
            </div>
            <div className="header-items">
                <ul>
                    {headerList.map((item,id) => {
                        if(item === 'About')
                            return (<li key={id}><Link to="/about"> {item} </Link></li>)
                        else
                            return (<li key={id}> {item} </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header