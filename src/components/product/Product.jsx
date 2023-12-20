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
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { item } });
  };
  return (
    <li
      onClick={handleClick}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img className="w-full" id={id} src={thumbnails.default.url} alt={alt} />
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p>{`${name}`}</p>
        <p>{`${quantity}개`}</p>
        <p>{`1박 ${price}원`}</p>
      </div>
    </li>
  );
}
