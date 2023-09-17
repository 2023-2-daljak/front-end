import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsFillMoonFill, BsMessenger } from "react-icons/bs";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <BsFillMoonFill />
        <h1>DalJak</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/favs">Favs</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        <Link to="/products/new" className="text-2xl">
          <BsMessenger />
        </Link>
        <Button text={"Login"}></Button>
      </nav>
    </header>
  );
}
