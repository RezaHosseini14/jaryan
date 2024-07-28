"use client";
import React, { useState } from "react";
//@ts-ignore
import moment from "moment-jalaali";
import { Moment } from "moment";

// components
import EventForm from "./EventForm";

// css
import "@/assets/css/calendar.css";
import { EventsFormType } from "@/models/types/EventForm.Types";

moment.loadPersian({ usePersianDigits: true });

type EventsType = {
  title: string;
  color: string;
  day: Moment;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [events, setEvents] = useState<EventsType[]>([]);

  const startDay = currentDate.clone().startOf("month").startOf("week");
  const endDay = currentDate.clone().endOf("month").endOf("week");

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  const handleAddEvent = (title: string, color: string, day: Moment) => {
    setEvents([...events, { title, color, day }]);
  };

  const handleDeleteEvent = (eventTitle: string) => {
    setEvents(events.filter((event) => event.title !== eventTitle));
  };

  const handleDropEvent = (event: EventsFormType, day: Moment) => {
    setEvents(events.map((e) => (e.title === event.title ? { ...e, day } : e)));
  };

  const days = [];
  let day = startDay.clone().subtract(1, "day");
  while (day.isBefore(endDay, "day")) {
    days.push(day.add(1, "day").clone());
  }

  const weekdays = ["شنبه", "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];

  return (
    <div className="calendar grid grid-cols-12 gap-8 w-full">
      <EventForm
        events={events}
        onAddEvent={handleAddEvent}
        handleDeleteEvent={handleDeleteEvent}
      />

      <div className="glass-box col-span-8 border border-spGray rounded-xl p-4">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1" onClick={handlePrevMonth}>
            <i className="ki-outline ki-right"></i>
            <span>ماه قبل</span>
          </button>
          <h3 className="text-2xl font-bold">{currentDate.format("jMMMM jYYYY")}</h3>
          <button className="flex items-center gap-1" onClick={handleNextMonth}>
            <span>ماه بعد</span>
            <i className="ki-outline ki-left"></i>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-[5px] my-4">
          {weekdays.map((day, index) => (
            <div key={index} className="text-center font-bold">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-[5px]">
          {days.map((dayItem, index) => (
            <div
              key={index}
              className={`day ${dayItem.isSame(currentDate, "month") ? "" : "disabled"} ${
                dayItem.isSame(moment(), "day") ? "currentDay" : ""
              } border p-2`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const event = JSON.parse(e.dataTransfer.getData("event"));
                handleDropEvent(event, dayItem);
              }}
            >
              <span>{dayItem.format("jD")}</span>
              {events
                .filter((event) => event.day.isSame(dayItem, "day"))
                .map((event, idx) => (
                  <div key={idx} style={{ backgroundColor: event.color }}>
                    {event.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
