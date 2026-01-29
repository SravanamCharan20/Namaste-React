import React from "react";

const RestaurantCard = ({resData}) => {
  const { name, cuisines, avgRating ,sla} = resData;
  return (
    <div>
      {/* Resturant card Container */}
      <div>
        <div>
          <h1>{name}</h1>
          <h1>{avgRating}</h1>
          <h1>{cuisines.join(", ")}</h1>
          <h1>{sla.deliveryTime}</h1>
          <h1>{sla.slaString}</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
