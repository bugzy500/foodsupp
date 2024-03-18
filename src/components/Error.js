import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();

    console.log(err);
    return (
        <><div className="shimmer-load">
            Error....
        </div><h2>{err.status + " :  " + err.statusText}</h2></>
    )
}

export default Error