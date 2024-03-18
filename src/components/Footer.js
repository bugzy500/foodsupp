import { CDN_LOGO } from "../utils/imagesLinks"

const footerItems = ['Company','Locations','Legal','Contact Us']

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="bottom-logo">
                <img src={CDN_LOGO}></img>
            </div>
            <div className="footer-list">
                <ul>
                    {footerItems.map((item,id) => {
                        return (<li key={id}>{item}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer