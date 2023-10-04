import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsFillMoonFill, BsMessenger } from "react-icons/bs";
import Button from "./ui/Button";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <BsFillMoonFill />
        <h1>DalJak</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/favs">Favs</Link>

        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}

        <Link to="/products/new" className="text-2xl">
          <BsMessenger />
        </Link>
        {user && <User user={user}></User>}
        {!user && <Button onClick={handleLogin} text={"Login"}></Button>}
        {user && <Button onClick={handleLogout} text={"Logout"}></Button>}
      </nav>
    </header>
  );
}
