import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Landed on Something else!!</h1>
            <h2>You choose a wrong Path : {err.error.message}</h2>
        </div>
    )
}

export default Error;