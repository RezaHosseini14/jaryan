"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME, SIDEBAR_OPEN } from "@/redux/slices/styleSlice";
import { RootState } from "@/redux/store";
import { ThemeEnum } from "@/models/enums/Theme.enum";

const Header = () => {
  const dispatch = useDispatch();
  const { sideBar } = useSelector((state: RootState) => state.style);
  const [theme, setTheme] = useState<ThemeEnum>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? (storedTheme as ThemeEnum) : ThemeEnum.Light;
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;
    setTheme(newTheme);
    dispatch(CHANGE_THEME(newTheme));
    localStorage.setItem("theme", newTheme);
  };

  const handleToggleSideBar = () => {
    const newSidebarState = !sideBar;
    dispatch(SIDEBAR_OPEN(newSidebarState));
    localStorage.setItem("sidebar", JSON.stringify(newSidebarState));
  };

  return (
    <header className="flex items-center justify-between px-4 w-full h-14 rounded-xl bg-spGreen dark:bg-spGreen/45 dark:backdrop-blur-2xl text-white">
      <div className="flex items-center gap-4">
        <i
          onClick={handleToggleSideBar}
          className="ki-outline ki-burger-menu-5 text-2xl cursor-pointer"
        ></i>
        <h1 className="text-lg font-bold">مرکز رویداد رسانه جریان</h1>
      </div>
      <div className="flex items-center gap-4">
        <i
          onClick={toggleTheme}
          className={`ki-outline ki-${
            theme === ThemeEnum.Light ? "moon" : "sun"
          } text-2xl cursor-pointer`}
        ></i>
        <Link href="/dashboard">
          <i className="ki-outline ki-home-2 text-2xl"></i>
        </Link>
        <i className="ki-outline ki-exit-left text-2xl"></i>
      </div>
    </header>
  );
};

export default Header;
