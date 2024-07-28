import React from "react";

// components
import EventCard from "@/components/pages/dashboard/events/Event.Card";
import EventsLogs from "@/components/pages/dashboard/events/Events.Logs";

// jsons
import { events } from "@/json/Events";

function EventsPage() {
  const eventsCardMap = events.map((item) => <EventCard id={item.id} title={item.title} image={item.image} date={item.date} population={item.population} />);
  return (
    <div className="flex flex-col gap-8">
      <EventsLogs />
      <div className="sp_border"></div>
      <div className="grid 3xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">{eventsCardMap}</div>
    </div>
  );
}

export default EventsPage;
