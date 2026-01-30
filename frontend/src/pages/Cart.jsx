import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "../Components/RestaurantCard";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">🛒 Cart</h1>
        <p className="text-gray-500 mt-1">
          {cartItems.length} item{cartItems.length !== 1 && "s"} in your cart
        </p>
      </div>

      {/* Clear cart button */}
      {cartItems.length > 0 && (
        <div className="flex justify-center mb-8">
          <button
            className="rounded-full bg-red-500 px-6 py-2 text-white font-semibold
                       hover:bg-red-600 active:scale-95 transition cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}

      {/* Cart Items */}
      <div className="flex flex-wrap justify-center gap-6">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">Your cart is empty</p>
            <p className="text-sm mt-1">Add some restaurants to get started</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <RestaurantCard key={item.id} resData={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;