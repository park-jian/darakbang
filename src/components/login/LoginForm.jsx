import React, { useState } from "react";
import EmailLogin from "./EmailLogin";
import SNSLogin from "./SNSLogin";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="flex justify-center items-center flex-col w-96 h-3/5 border rounded mx-auto mt-12">
      <div className="tab-buttons mt-2 border-b-2 w-full h-8 flex items-center justify-around">
        <button
          onClick={() => handleTabClick(1)}
          id="emailLoginTab"
          className={`focus:border-b-4 border-sky-500 ${
            activeTab === 1 ? "active" : ""
          }`}
        >
          이메일 로그인
        </button>
        <button
          onClick={() => handleTabClick(2)}
          id="SNSLoginTab"
          className={`focus:border-b-4 border-sky-500 ${
            activeTab === 2 ? "active" : ""
          }`}
        >
          SNS 로그인
        </button>
      </div>

      <div className="tab-content w-full h-96 flex items-center justify-center focus:bg-orange-300">
        {activeTab === 1 && <EmailLogin></EmailLogin>}
        {activeTab === 2 && <SNSLogin></SNSLogin>}
      </div>
    </div>
  );
}
