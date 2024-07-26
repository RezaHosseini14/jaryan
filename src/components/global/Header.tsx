"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [theme, setTheme] = useState<boolean>(false);
  const changeThemeHandler = () => {
    setTheme(!theme);
  };

  return (
    <header className="flex items-center justify-between px-4 w-full h-14 rounded-xl bg-spGreen text-white">
      <div className="flex items-center gap-4">
        <i className="ki-outline ki-burger-menu-5 text-2xl"></i>
        <h1 className="text-lg font-bold">مرکز رویداد رسانه جریان</h1>
      </div>
      <div className="flex items-center gap-4">
        <i
          onClick={changeThemeHandler}
          className={`ki-outline ki-${theme ? "moon" : "sun"} text-2xl cursor-pointer`}
        ></i>
        <Link href="/dashboard">
          <i className="ki-outline ki-home-2 text-2xl"></i>
        </Link>

        <div className="group relative">
          <i className="ki-outline ki-user text-2xl cursor-pointer"></i>
          <div className="group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all absolute left-0 top-12 z-50 shadow-spBox-lg bg-spCream rounded-xl size-48"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
