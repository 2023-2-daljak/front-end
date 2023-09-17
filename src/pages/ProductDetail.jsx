import React from "react";
import Button from "../components/ui/Button";
import Image from "../img/img.jpg";

export default function ProductDetail() {
  return (
    <div>
      <p className="mx-12 mt-4 text-gray-700">카테고리</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-96 mx-auto mb-2" src={Image} />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">이게 제목이다</h2>
          <p className="text-2xl font-bold py-2  border-b border-gray-400">
            ₩1000000
          </p>
          <p className="py-4 text-lg">
            우리가 만들 냉장고는 겁나 시원하고 냄새도 좋은 냉장고를 만들려고
            합니다
          </p>
          <div className="flex items-center"></div>
          <Button text="관심목록에 추가" />
        </div>
      </section>
    </div>
  );
}
