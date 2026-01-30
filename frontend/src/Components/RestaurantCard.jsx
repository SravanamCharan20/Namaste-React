import { Link } from "react-router-dom";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import userContext from "../utils/userContext";
import { addItem } from "../utils/cartSlice";

const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  const { loggedInUser } = useContext(userContext);
  const { id, name, cuisines, avgRating, sla } = resData;
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.stopPropagation(); // prevents navigation
    dispatch(addItem({ id, name, cuisines, avgRating, sla }));
  };

  return (
    <div data-testid="resCard" className="w-[320px] mx-auto m-2 rounded-2xl border bg-white p-4 shadow-sm 
                    hover:shadow-lg transition-shadow duration-300">

      {/* Clickable Card Content */}
      <Link to={`/restaurant/${id}`} className="text-left block">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h2>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            ⭐ <span className="font-medium">{avgRating}</span>
          </span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {cuisines.join(", ")}
        </p>
      </Link>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          👤 {loggedInUser}
        </span>

        <button
          onClick={handleAddItem}
          className="rounded-full bg-black px-4 py-1.5 text-sm font-semibold 
                     text-white cursor-pointer hover:bg-gray-800 active:scale-95 transition"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;