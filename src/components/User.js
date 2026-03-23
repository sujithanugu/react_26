import { useState } from "react";

const User = (props) => {
    const {name, location, contact} = props;
    const [count] = useState(0);
    const [count2] = useState(1);
    return <div className="user">
        <h1>Count : {count} + {count2}</h1>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: {contact}</h3>
    </div>

}

export default User;