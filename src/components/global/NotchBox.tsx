"use client";
import Image from "next/image";
import React, { useState } from "react";

// images
import notchCream from "@/assets/img/notchCream.svg";
import notchGreen from "@/assets/img/notchGreen.svg";
import notchWhite from "@/assets/img/notchWhite.svg";
import notchGreenLight from "@/assets/img/notchGreenLight.svg";
import { ThemeEnum } from "@/models/enums/Theme.enum";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

enum NotchColors {
  Green = "green",
  Cream = "cream",
  White = "white",
}

function NotchBox({
  children,
  color,
}: Readonly<{ children: React.ReactNode; color: NotchColors }>) {
  const { theme } = useSelector((state: RootState) => state.style);

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden h-full">
      <div className="flex items-center logo-container w-full -mb-[1px] z-40">
        <div
          className={`${
            color === "cream"
              ? "bg-spCream"
              : color === "white"
                ? "bg-white"
                : "bg-spGreen dark:bg-spGreenLight"
          } h-[2.4rem] flex-1 -ml-[1px] dark:bg-spDarkBlue`}
        ></div>
        <Image
          src={
            color === "cream"
              ? notchCream
              : color === "white"
                ? notchWhite // فرض کنید notchWhite برای رنگ سفید استفاده می‌شود
                : theme === "dark"
                  ? notchGreenLight
                  : notchGreen
          }
          alt="notch"
          width={150}
          height={150}
          priority
          className=""
        />
        <div
          className={`${
            color === "cream"
              ? "bg-spCream"
              : color === "white"
                ? "bg-white"
                : "bg-spGreen dark:bg-spGreenLight"
          } h-[2.4rem] flex-1 -ml-[1px] dark:bg-spDarkBlue`}
        ></div>
      </div>
      {children}
    </div>
  );
}

export default NotchBox;
