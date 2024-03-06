import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EmailLogin() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    const _password = e.target.value;
    setPasswordError("");
    setPassword(_password);
  };
  const handlePasswordBlur = (e) => {
    //비밀번호 유효성 검사(영문대또는 소문자, 숫자, 특수기호 포함 최소 1개씩 포함 총 8자 이상)
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("비밀 번호를 확인해 주세요");
    } else {
      setPasswordError();
    }
  };
  const handleEmailBlur = (e) => {
    //이메일 유효성 검사(@기준 앞 구간이 알파벳 또는 숫자 조합, 뒷 구간이 알파벳 숫자 조합, @ 뒷구간에 . 뒷구간이 알파벳)
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (!emailRegex.test(email)) {
      setEmailError("아이디는 이메일 형식으로 입력해주세요.");
    } else {
      setEmailError();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center flex-col w-full h-full ">
        <FaLock size="24" color="skyblue" />
        <p className="m-6 text-2xl">이메일 로그인</p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
          className="w-3/5 h-9 border rounded-md"
          placeholder="Email Address*"
        ></input>
        <div className="h-7">
          {emailError && (
            <span className="text-red-500 text-xs">{emailError}</span>
          )}
        </div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          required
          className="w-3/5 h-9 border rounded-md"
          placeholder="Password*"
          autoComplete="on"
        ></input>
        <div className="h-7">
          {passwordError && (
            <span className="text-red-500 text-xs">{passwordError}</span>
          )}
        </div>
        <div className="flex justify-start w-3/5 m-2">
          <input className="mr-2" type="checkbox" />
          <span className="text-sm">자동로그인</span>
        </div>
        <button className="my-0.5 mb-3 w-3/5 h-9 rounded-md bg-sky-500 hover:bg-sky-700 text-white">
          SIGN IN
        </button>
        <div className="flex justify-between w-3/5 text-sm">
          <Link to="/passwordsearch" className="cursor-grabbing underline">
            Forgot password?
          </Link>
          <Link to="/signup" className="cursor-grabbing underline">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
