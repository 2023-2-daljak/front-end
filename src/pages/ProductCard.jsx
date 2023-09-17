import React from "react";
import Image from "../img/img.jpg";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <li
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
      onClick={() => {
        navigate(`/products/1352`);
      }}
    >
      <img className="w-96 mx-auto mb-2" src={Image}></img>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">이게 제목이다</h3>
        <p>₩1000000</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">카테고리</p>
    </li>
  );
}
