"use client";
import Map from "@/components/pages/dashboard/Map";
import Calendar from "@/components/pages/dashboard/Calendar";
import CarriedoutEvents from "@/components/pages/dashboard/tables/CarriedoutEvents";
import UpcomingEvents from "@/components/pages/dashboard/tables/UpcomingEvents";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="flex flex-col gap-16">
      {/* <PersianDatePicker/> */}
      <Map />

      <UpcomingEvents />
      <CarriedoutEvents />
      <Calendar />
    </div>
  );
}

export default Dashboard;
