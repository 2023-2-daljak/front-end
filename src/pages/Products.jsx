import React from "react";
import ProductCard from "./ProductCard";
import Images from "../img/codings.jpg";
import Imagess from "../img/airs.jpg";
import Image from "../img/img.jpg";
import { useNavigate } from "react-router-dom";

export default function Products() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
      <ProductCard></ProductCard>
      <li className="rounded-lg shadow-md overflow-hidden cursor-pointer  transition-all hover:scale-105">
        <img className="w-96 mx-auto mb-2" src={Images}></img>
        <div className="mt-2 px-2 text-lg flex justify-between items-center">
          <h3 className="truncate">코딩</h3>
          <p>₩500000</p>
        </div>
        <p className="mb-2 px-2 text-gray-600">카테고리</p>
      </li>
      <li className="rounded-lg shadow-md overflow-hidden cursor-pointer  transition-all hover:scale-105">
        <img className="w-96 mx-auto mb-2" src={Imagess}></img>
        <div className="mt-2 px-2 text-lg flex justify-between items-center">
          <h3 className="truncate">선풍기</h3>
          <p>₩30000</p>
        </div>
        <p className="mb-2 px-2 text-gray-600">카테고리</p>
      </li>
    </ul>
  );
}
