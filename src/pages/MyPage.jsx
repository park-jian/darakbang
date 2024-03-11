import React, { useEffect, useState } from "react";
import profile from "../data/profile.json";
import axios from "axios";
const testUser = profile.user[0];

const handleButtonClick = (inputId) => {
  //MyPage 함수 안으로 들어가야 하는거 아님?
  const inputElem = document.getElementById(inputId);
  inputElem.readOnly = false;
  //fetchData();
};

const handleBlurEvent = (e) => {
  const inputElem = e.target;
  inputElem.readOnly = true;
};

export default function MyPage() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "/user",
        });
        if (res.status === 200) {
          const user = res.data.user[1]; //일단 두번째 사용자를 로그인 유저라 가정
          setUserData(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함.
  return (
    <div className="flex justify-center items-center flex-col w-6/12 h-3/5 mx-auto my-12">
      <div
        id="section_title"
        className="border-sky-400 h-12 flex justify-center items-center"
      >
        마이페이지
      </div>
      <div id="join_content" className="w-full h-full">
        <div
          id="member_wrap"
          className="mt-4 border flex"
          onBlur={handleBlurEvent}
        >
          <div className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-24 border-r">
            아이디
          </div>
          <input
            className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-full"
            id="my_id"
            type="text"
            name="id"
            value={userData && userData.id}
            readOnly
          />
        </div>

        <div
          id="member_wrap"
          className="mt-4 border flex"
          onBlur={handleBlurEvent}
        >
          <div className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-24 border-r">
            닉네임
          </div>
          <input
            className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-full"
            id="my_nickname"
            type="text"
            name="nickname"
            value={userData && userData.nickName}
            readOnly
          />
          <button
            className="w-16 bg-sky-200"
            onClick={() => handleButtonClick("my_nickname")}
          >
            변경
          </button>
        </div>

        <div
          id="member_wrap"
          className="mt-4 border flex"
          onBlur={handleBlurEvent}
        >
          <div className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-24 border-r">
            이메일
          </div>
          <input
            className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-full"
            id="my_email"
            type="text"
            name="email"
            value={userData && userData.email}
            readOnly
          />
          <button
            className="w-16 bg-sky-200"
            onClick={() => handleButtonClick("my_email")}
          >
            변경
          </button>
        </div>

        <div
          id="member_wrap"
          className="mt-4 border flex"
          onBlur={handleBlurEvent}
        >
          <div className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-24 border-r">
            핸드폰
          </div>
          <input
            className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-full"
            id="my_phone"
            type="text"
            name="phone"
            value={userData && userData.phone}
            readOnly
          />
          <button
            className="w-16 bg-sky-200"
            onClick={() => handleButtonClick("my_phone")}
          >
            변경
          </button>
        </div>

        <div
          id="member_wrap"
          className="mt-4 border flex"
          onBlur={handleBlurEvent}
        >
          <div className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-24 border-r">
            비밀번호
          </div>
          <input
            className="m-0 h-full align-middle box-border pl-2 pt-3 pb-3 text-sm w-full"
            id="my_password"
            type="password"
            name="password"
            value={userData && userData.password}
            readOnly
          />
          <button
            className="w-16 bg-sky-200"
            onClick={() => handleButtonClick("my_password")}
          >
            변경
          </button>
        </div>
      </div>
    </div>
  );
}
