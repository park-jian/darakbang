import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: {
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
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleClick = (e) => {
    const item = { id, name, price, option: selected, quantity };
  };
  const handleSelect = (e) => setSelected(e.target.value);
  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{name}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img
          className="w-full px-4 basis-7/12"
          src={thumbnails.default.url}
          alt={name}
          id={id}
        />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">{quantity}개</h2>
          <select id="select">
            className="p-2 m-4 flex-1 border-2 border-dashed border-brand
            outline-none" onChange={handleSelect}
            value={selected}
          </select>
          <p className="text-2xl font-bold py-2  border-b border-gray-400">
            ₩{price}
          </p>
          <Button text="예약" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
