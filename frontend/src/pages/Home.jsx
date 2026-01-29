import React, { useEffect, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import Shimmer from "../Components/Shimmer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.3924982&lng=78.46796379999999&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>restaurants</h1>
      <div className="restaurant-list">
        {data.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Home;
