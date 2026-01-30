import React, { useContext, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import Shimmer from "../Components/Shimmer";
import useResData from "../utils/useResData.js";
import userContext from "../utils/userContext";

const Home = () => {
  const data = useResData();
  const {setUserName} = useContext(userContext);

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="text-center p-3">
        <label>Username : </label>
        <input
          type="text"
          className="border p-1 m-1"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
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
