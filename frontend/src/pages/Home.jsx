import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import Shimmer from "../Components/Shimmer";
import useResData from "../utils/useResData.js";
const Home = () => {
  const data = useResData();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="text-center text-3xl m-5">Restaurants</h1>
      <div className="restaurant-list">
        {data.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Home;
