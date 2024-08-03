"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// components
import NotchBox from "./NotchBox";

// jsons
import { sidebarItems } from "@/json/Sidebar.Items";

// images
import logo from "@/assets/img/logo.svg";
import userimage from "@/assets/img/user.jpg";

// css
import "@/assets/css/sidebar.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function Sidebar() {
  const { sideBar } = useSelector((state: RootState) => state.style);
  const [sidebarState, setSidebarState] = useState(sideBar);

  useEffect(() => {
    const storedSidebarState = localStorage.getItem("sidebar");
    if (storedSidebarState) {
      setSidebarState(JSON.parse(storedSidebarState));
    }
  }, [sideBar]);

  const sidebarItemsMap = sidebarItems.map((item, index: number) => (
    <div className="flex gap-2">
      {item.sub?.length > 0 && <div className="w-[2px] h-full rounded-sm bg-white"></div>}
      <div key={index} className="flex flex-col gap-2 w-full">
        <Link className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl text-lg" href={item.link}>
          <i className={`${item.icon} text-spGreen`}></i>
          {sidebarState && <span className="font-bold text-spGreen">{item.title}</span>}
        </Link>
        {item.sub?.length > 0 &&
          item.sub?.map((subItem, subItemIndex) => (
            <>
              <Link className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl text-lg" href={subItem.link}>
                <i className={`${subItem.icon} text-spGreen`}></i>
                {sidebarState && <span className="font-bold text-spGreen">{subItem.title}</span>}
              </Link>
            </>
          ))}
      </div>
    </div>
  ));
  return (
    <motion.div className="xl:block hidden" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.85, ease: "easeInOut" }}>
      <div className={`sidebar xl:sticky fixed xl:top-8 top-8 right-0 transition ${sidebarState ? "w-[18rem]" : "w-[5rem]"} z-50`}>
        <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.33, 0, 0.67, 1], // cubic-bezier(0.33, 0, 0.67, 1)
            }}
          >
            <Image src={logo} alt="Logo" width={40} height={40} priority className="absolute right-1/2 translate-x-1/2 -top-6 z-50" />
          </motion.div>

          <NotchBox color="green">
            <div className="p-4 bg-spGreen dark:bg-spGreenLight relative pt-10 h-full">
              <div className="sidebar-bg"></div>
              <div className="flex flex-col h-full">
                <div className="flex flex-col gap-4 z-40 relative flex-1">{sidebarItemsMap}</div>
                <div className="flex items-center gap-4 relative px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl text-lg">
                  <div className="size-10 bg-spGreen dark:bg-spGreenLight dark:bg-spDarkBlue rounded-full overflow-hidden">
                    {/* <i className="ki-outline ki-user text-2xl cursor-pointer"></i> */}
                    <Image className="w-full h-full" src={userimage} alt="userimage" objectFit="cover" />
                  </div>
                  {sideBar && (
                    <div className="flex flex-col items-start text-spGreen flex-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-base leading-4 font-semibold">admin</span>
                        <span className="text-xs leading-4 font-bold bg-green-100 text-green-600 rounded-[0.2rem] py-[0.1rem] px-[0.2rem]">مدیرکل</span>
                      </div>
                      <span className="text-xs">سید محمد رضا حسینی</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </NotchBox>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
