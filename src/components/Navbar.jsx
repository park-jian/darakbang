import React from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiCharacter } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import home from "../image/home.png";

export default function Navbar() {
  return (
    <div className="flex flex-row h-40 bg-blue-200 items-center">
      <button className="w-30 text-base flex flex-col items-center justify-center h-full bg-sky-500 text-white">
        <FiAlignJustify />
        카테고리
      </button>
      <div className="h-full w-full p-3">
        <div className="flex flex-row h-20 items-center">
          <Link to="/" className="mr-6">
            <img src={home} alt="logo" />
          </Link>
          <div className="flex items-center border-2 rounded-lg border-black w-60 mr-6">
            <input className="border-0 bg-transparent w-60" type="text" />
            <button className="right-0">
              <FaSearch />
            </button>
          </div>
          <Link
            to="mypage"
            className="mr-6 flex justify-center items-center flex-col"
          >
            <GiCharacter className="" />
            <p>마이페이지</p>
          </Link>
          <Link
            to="carts"
            className="mr-6 flex justify-center items-center flex-col"
          >
            <RiShoppingCart2Line />
            <p>장바구니</p>
          </Link>
        </div>
        <div className="bottom-0 grid grid-flow-col justify-stretch">
          <Link to="/">홈</Link>
          <Link to="signin">로그인</Link>
          <Link to="signup">회원가입</Link>

          <Link to="support">고객센터</Link>
        </div>
      </div>
    </div>
  );
}
