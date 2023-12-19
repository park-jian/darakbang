import React, { useState, useEffect } from "react";
import itemList from "../data/itemList.json";
import Product from "../components/product/Product";

export default function Home() {
  const [product, setProduct] = useState([]);
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
  const extractItem = (items) => {
    // JSON 파일에서 이미지 URL 추출
    const item = items.map((item) => {
      return item;
    });
    setProduct(item);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 상품 이미지를 가져오는 함수 호출
    extractItem(itemList.items);
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정
  return (
    <div className="bg-slate-200">
      <h1>실시간 BEST</h1>
      <ul className="flex">
        <li>일간 BEST</li>
        <li>주간 BEST</li>
        <li>월간 BEST</li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {product.map((item, index) => (
          <Product key={item.id} alt={`상품 이미지 ${index + 1}`} item={item} />
        ))}
      </div>
    </div>
  );
}
