import Image from "next/image";
import React from "react";
import notchCream from "@/assets/img/notchCream.svg";
import notchGreen from "@/assets/img/notchGreen.svg";

enum NotchColors {
  Green = "green",
  Cream = "cream",
}

function NotchBox({
  children,
  color,
}: Readonly<{ children: React.ReactNode; color: NotchColors }>) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden h-full">
      <div className="flex items-center logo-container w-full -mb-[1px] z-40">
        <div
          className={`${
            color == "cream" ? "bg-spCream" : "bg-spGreen"
          } h-[2.4rem] flex-1 -ml-[1px]`}
        ></div>
        <Image
          src={color == "cream" ? notchCream : notchGreen}
          alt="logo-container"
          width={150}
          height={150}
          priority
          className=""
        />
        <div
          className={`${color == "cream" ? "bg-spCream" : "bg-spGreen"} h-[2.4rem] flex-1`}
        ></div>
      </div>
      {children}
    </div>
  );
}

export default NotchBox;
