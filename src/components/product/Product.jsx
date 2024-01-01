import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({
  alt,
  item,
  item: {
    id,
    name,
    soldout,
    size,
    color,
    price,
    quantity,
    thumbnails,
    options,
  },
}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (item.quantity > 0) {
      navigate(`/products/${id}`, { state: { item } });
    } else {
      e.preventDefault();
    }
  };
  return (
    <li
      onClick={(e) => handleClick(e)}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105 list-none"
    >
      <div className="inline-block relative">
        <img
          className={`w-full ${quantity <= 0 ? "opacity-50" : ""}`}
          id={id}
          src={thumbnails.default.url}
          alt={alt}
        />
        {quantity <= 0 && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1 px-2 rounded font-bold text-2xl">
            품절
          </div>
        )}
      </div>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p>{`${name}`}</p>
        <p>{`1박 ${price}원`}</p>
      </div>
    </li>
  );
}
