"use client";
import Map from "@/components/pages/dashboard/Map";
import CarriedoutEvents from "@/components/pages/dashboard/tables/CarriedoutEvents";
import UpcomingEvents from "@/components/pages/dashboard/tables/UpcomingEvents";
import MyCalendar from "@/components/pages/MyCalandar";

function Dashboard() {
  return (
    <div className="flex flex-col gap-10">
      <UpcomingEvents />
      <CarriedoutEvents />
      <MyCalendar />
      <Map />

    </div>
  );
}

export default Dashboard;
