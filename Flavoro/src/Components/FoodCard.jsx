import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out overflow-hidden"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <p className="text-green-500">₹{price}</p>
      </div>
      <p className="text-sm font-normal ">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex items-center justify-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, img, rating, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
