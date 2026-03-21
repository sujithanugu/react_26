import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginbutton, setLoginButton] = useState("login")
  useEffect(() => {
      console.log("called!")
    },[loginbutton]);
  return (
    <div className="header">
      <div className="logo-cnt">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/009/944/948/non_2x/food-company-logo-design-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
          <li>
            <img className="cart-logo" src={LOGO_URL} />
          </li>
          <button className="login" onClick={()=>{
            loginbutton === "login" ? setLoginButton("logout") : setLoginButton("login");
          }}>{loginbutton}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
