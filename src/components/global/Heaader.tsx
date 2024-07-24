"use client";
import Link from "next/link";
import React, { useState } from "react";

function Heaader() {
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
        <Link href="/">
          <i className="ki-outline ki-home-2 text-2xl"></i>
        </Link>
      </div>
    </header>
  );
}

export default Heaader;
