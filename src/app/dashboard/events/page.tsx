"use client";

// components
import EventCard from "@/components/pages/dashboard/events/Event.Card";
import EventsLogs from "@/components/pages/dashboard/events/Events.Logs";

// jsons
import { useState } from "react";
import EventsTable from "@/components/pages/dashboard/events/table/EventsTable";
import { mainData } from "@/json/mainData";

function EventsPage() {
  const [mode, setMode] = useState<boolean>(true);
  const eventsCardMap = mainData.map((item) => (
    <EventCard
      id={item.id}
      title={item.title}
      image={item.image}
      date={item.createTime}
      population={item.population}
    />
  ));
  return (
    <div className="flex flex-col gap-8">
      <EventsLogs />
      <div className="sp_border"></div>
      <div className="flex flex-col gap-8 border border-spGreen p-4 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              className={`flex-1 green-button py-2 px-4 font-bold rounded-xl ${mode && "!bg-spGreen/100"}`}
              onClick={() => setMode(true)}
            >
              کاردباکس
            </button>
            <button
              className={`flex-1 green-button py-2 px-4 font-bold rounded-xl ${!mode && "!bg-spGreen/100"}`}
              onClick={() => setMode(false)}
            >
              جدول
            </button>
          </div>

          <div className="sp_border_right flex-1"></div>
        </div>

        {mode && (
          <div className="grid 3xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {eventsCardMap}
          </div>
        )}
        {!mode && <EventsTable />}
      </div>
    </div>
  );
}

export default EventsPage;
