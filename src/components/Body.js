import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [
    listOfRestaurants,
    filteredListRestaurants,
    setFilteredListRestaurants,
  ] = useRestaurantList();
  const [searchText, setSearchText] = useState("");

const onlineStatus = useOnlineStatus();
if (onlineStatus === false) return <h1>Looks like you are Offline, please check your internet connection</h1>

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredListRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setFilteredListRestaurants(filteredList);
          }}
        >
          Top Rated Outlets
        </button>
      </div>
      <div className="res-cnt">
        {filteredListRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
