"use client";
import React from "react";
import { motion } from "framer-motion";
import Heaader from "@/components/global/Heaader";
import Sidebar from "@/components/global/Sidebar";

const DashboardLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-container flex gap-8 h-full sm:p-4">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
        >
          <Heaader />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex-1"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
