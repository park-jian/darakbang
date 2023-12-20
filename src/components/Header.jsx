import React from "react";
import hotel from "../image/hotel.jpg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <img className="max-h-96 w-full" src={hotel} alt="Banner" />
      <Navbar />
    </>
  );
}
