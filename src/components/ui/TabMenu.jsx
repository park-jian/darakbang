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
    <div className="bg-slate-200 mt-4">
      <ul id="tabMenu" className="flex pt-2 pl-2">
        {tabData.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer border-black border-solid rounded-t-lg ${
              activeTab === index
                ? "font-bold border-x-2 border-t-2 bg-black text-white"
                : "border-x border-t text-black"
            } select-none`}
            onClick={() => tabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div
        id="tabContent"
        className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4"
      >
        {itemList.map((item, index) => (
          <Product key={item.id} alt={`상품 이미지 ${index + 1}`} item={item} />
        ))}
      </div>
    </div>
  );
}
