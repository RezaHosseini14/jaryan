"use client";
import Map from "@/components/pages/dashboard/Map";
import Calendar from "@/components/pages/dashboard/Calendar";
import CarriedoutEvents from "@/components/pages/dashboard/tables/CarriedoutEvents";
import UpcomingEvents from "@/components/pages/dashboard/tables/UpcomingEvents";
import MyCalendar from "@/components/pages/MyCalandar";

function Dashboard() {
  return (
    <div className="flex flex-col gap-16">
      <UpcomingEvents />
      <CarriedoutEvents />
      <Calendar />
      <Map />
      {/* <MyCalendar /> */}
    </div>
  );
}

export default Dashboard;
