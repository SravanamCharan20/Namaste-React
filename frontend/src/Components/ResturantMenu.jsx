import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" +
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3924982&lng=78.46796379999999&restaurantId=" +
        resId
    );

    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info)

    setResMenu(json?.data?.cards[2]?.card?.card?.info);
  };

  if (!resMenu) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{resMenu.name}</h1>
      <p className="mt-2 text-gray-600">
        {resMenu.cuisines?.join(", ")}
      </p>
      <p className="mt-1">⭐ {resMenu.avgRating}</p>
      <p className="mt-1">
        {resMenu.areaName}, {resMenu.city}
      </p>
    </div>
  );
};

export default RestaurantMenu;