import React from "react";

const RestaurantCard = ({resData}) => {
  const { name, cuisines, avgRating ,sla} = resData;
  return (
    <div>
        
      {/* Resturant card Container */}
      <div className="border text-center p-5 m-2 w-[320px] mx-auto">
        
        <div className="text-left">
          <h1 className="text-red-600">Restuarant : <span className="text-bold text-black text-lg">{name}</span></h1>
          <h1>Rating : {avgRating}</h1>
          <h1>Cuisines : {cuisines.join(", ")}</h1>
          <h1>deliveryTime : {sla.deliveryTime} min</h1>
          <h1>Estimated Time : {sla.slaString}</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
