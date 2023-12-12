import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5";

export default function EmailLogin() {
  const [email, setEmail] = useState("");
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
      setPasswordError(<IoCloseCircle color="red" size="24" />);
    } else {
      setPasswordError(<IoCheckmarkCircle color="green" size="24" />);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center flex-col w-full h-full ">
        <FaLock size="24" color="skyblue" />
        <p className="m-6 text-2xl">Email Sign in</p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          className="mb-3 w-3/5 h-9 border rounded-md"
          placeholder="Email Address*"
        ></input>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          required
          className="w-3/5 h-9 border rounded-md"
          placeholder="Password*"
        ></input>
        {passwordError && <span>{passwordError}</span>}
        <div className="flex justify-start w-3/5 m-2">
          <input className="mr-2" type="checkbox" />
          <span className="text-sm">자동로그인</span>
        </div>
        <button className="my-0.5 mb-3 w-3/5 h-9 rounded-md bg-sky-500 hover:bg-sky-700 text-white">
          SIGN IN
        </button>
        <div className="flex justify-between w-3/5 text-sm">
          <Link to="/" className="cursor-grabbing underline">
            Forgot password?
          </Link>
          <Link to="/" className="cursor-grabbing underline">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
