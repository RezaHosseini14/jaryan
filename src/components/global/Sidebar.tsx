import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import NotchBox from "./NotchBox";

import { sidebarItems } from "@/json/Sidebar.Items";

import logo from "@/assets/img/logo.svg";

import "@/assets/css/sidebar.css";

const sidebarItemsMap = sidebarItems.map((item, index: number) => (
  <Link
    className="flex items-center gap-3 px-4 py-2 bg-spCream rounded-xl text-lg"
    href={item.link}
    key={index}
  >
    <i className={`${item.icon} text-spGreen`}></i>
    <span className="font-bold text-spGreen">{item.title}</span>
  </Link>
));

function Sidebar() {
  return (
    <motion.div
      className="xl:block hidden"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <div className="sidebar xl:sticky fixed xl:top-8 top-8 right-0 w-[18rem] z-50">
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
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              priority
              className="absolute right-1/2 translate-x-1/2 -top-6 z-50"
            />
          </motion.div>

          <NotchBox color="green">
            <div className="p-4 bg-spGreen relative pt-10 h-full">
              <div className="sidebar-bg"></div>
              <div className="flex flex-col gap-4 z-40 relative">{sidebarItemsMap}</div>
            </div>
          </NotchBox>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
