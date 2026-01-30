import { useState,useEffect } from "react";

const useResData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" +
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=17.3924982&lng=78.46796379999999&carousel=true"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return data;
};

export default useResData;
