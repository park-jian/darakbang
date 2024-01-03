import React, { useState, useEffect } from "react";
import Product from "../../components/product/Product";

export default function TabMenu({ onTabChange, itemList }) {
  const tabData = [
    { title: "일간 best" },
    { title: "주간 best" },
    { title: "월간 best" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="bg-slate-200 m-8 pb-4">
      <p className="border-b py-3 pl-4">
        <span className="text-blue-500 font-bold text-2xl">D</span>
        <span className="text-blue-400">arakbang </span>
        <span className="text-blue-500 font-bold text-2xl">BEST</span>
      </p>
      <ul
        id="tabMenu"
        className="flex pl-2 mx-2 mt-2 pb-2 border-black border-solid border-t "
      >
        {tabData.map((tab, index) => (
          <li
            key={index}
            className={`top-0 cursor-pointer border-black border-solid px-3 mx-0.5 py-2 ${
              activeTab === index
                ? "font-bold border-t-4 border-blue-500 text-blue-500"
                : "text-black py-3"
            } select-none`}
            onClick={() => tabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div
        id="tabContent"
        className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-6 px-4"
      >
        {itemList.map((item, index) => (
          <Product
            key={item.id}
            alt={`상품 이미지 ${index + 1}`}
            item={item}
            no={index}
          />
        ))}
      </div>
    </div>
  );
}
