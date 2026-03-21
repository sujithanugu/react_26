import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams();
  console.log(resId);
  const fetchMenu = async () => {
    const data = await fetch(
    MENU_URL + resId,
    );
    const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    locality,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="resAdd">
        <h5>
          {locality} ,{areaName}
        </h5>
        <h5>
          {avgRating} ⭐ | {costForTwoMessage} | {sla.slaString}
        </h5>
      </div>
      <h5>{cuisines.join(", ")}</h5>
      <ul>
        {itemCards.map((item) => (
          <li key = {item?.card?.info?.id}>
            {item?.card?.info?.name} -{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}{" "}
            Rs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
