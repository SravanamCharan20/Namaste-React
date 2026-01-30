import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import Shimmer from "../Components/Shimmer";
import userContext from "../utils/userContext";

const Home = () => {
  const { setUserName } = useContext(userContext);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  // 📡 Fetch data (only once)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://corsproxy.io/?" +
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=17.3924982&lng=78.46796379999999&carousel=true&third_party_vendor=1"
        );

        const json = await res.json();

        const restaurants =
          json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setData(restaurants);
        setFilteredData(restaurants); // initial render
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchData();
  }, []);

  // 🔍 Button-based search
  const handleSearch = () => {
    const filtered = data.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // ⏳ Loading state
  if (data.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      {/* Search with Button */}
      <div className="text-center p-3">
        <label>Search : </label>
        <input
          type="text"
          data-testid = "resInput"
          className="border p-1 m-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-black text-white px-3 py-1 rounded-md ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Username */}
      <div className="text-center p-3">
        <label>Username : </label>
        <input
          type="text"
          className="border p-1 m-1"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <h1 className="text-center text-3xl m-5">Restaurants</h1>

      {/* Restaurant List */}
      <div className="restaurant-list">
        {filteredData.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Home;