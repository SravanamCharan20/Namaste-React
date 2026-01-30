import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantCard = ({ resData }) => {
  const {loggedInUser} = useContext(userContext);
  const { id, name, cuisines, avgRating, sla } = resData;

  return (
    <Link to={`/restaurant/${id}`} className="flex justify-center no-underline">
      <div className="w-[320px] rounded-xl border bg-white p-4 m-1 cursor-pointer">
        <h2 className="text-lg font-bold text-gray-800 truncate">{name}</h2>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            ⭐ <span className="font-medium">{avgRating}</span>
          </span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {cuisines.join(", ")}
        </p>
        <h1>{loggedInUser}</h1>
      </div>
      
    </Link>
  );
};

export default RestaurantCard;
