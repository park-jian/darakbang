import React, { useState, useEffect } from "react";
import TabMenu from "../components/ui/TabMenu.jsx";
import itemList from "../data/itemList.json";

export default function Home() {
  const [selectedItemList, setSelectedItemList] = useState(
    itemList.dailyBestItems
  );
  const handleTabChange = (index) => {
    // 해당 index에 해당하는 itemList를 선택하여 TabMenu로 전달
    setSelectedItemList(() => {
      switch (index) {
        case 0:
          return itemList.dailyBestItems;
        case 1:
          return itemList.weeklyBestItems;
        case 2:
          return itemList.monthlyBestItems;
        default:
          return [];
      }
    });
  };
  // const fetchProductImages = async () => {
  //   try {
  //     // 상품 이미지 목록을 가져오는 API 호출 또는 이미지 URL 배열을 가져오는 로직
  //     const response = await fetch('URL_상품_이미지_목록');
  //     const data = await response.json(); // JSON 형태로 받아온다고 가정

  //     // 받아온 데이터에서 이미지 URL들을 추출하여 설정
  //     const imageUrls = data.map(item => item.imageUrl);
  //     setProductImages(imageUrls);
  //   } catch (error) {
  //     console.error('상품 이미지를 가져오는 중 오류가 발생했습니다.', error);
  //   }
  // };

  return <TabMenu onTabChange={handleTabChange} itemList={selectedItemList} />;
}
