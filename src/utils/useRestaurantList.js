import { useState, useEffect } from "react";
import { RES_DATA } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredListRestaurants, setFilteredListRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_DATA);
    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredListRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  return [
    listOfRestaurants,
    filteredListRestaurants,
    setFilteredListRestaurants,
  ];
};

export default useRestaurantList;
