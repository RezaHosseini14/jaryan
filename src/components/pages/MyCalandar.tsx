"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-jalaali";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// css
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
const localizer = momentLocalizer(moment);

const ItemTypes = {
  EVENT: "event",
};

const DraggableEvent = ({ event }) => {
  const [, ref] = useDrag({
    type: ItemTypes.EVENT,
    item: { ...event },
  });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: event.color,
        color: "white",
        padding: "5px",
        borderRadius: "4px",
        cursor: "move",
        marginBottom: "5px",
      }}
    >
      {event.title}
    </div>
  );
};

const CalendarWithEvents = ({ events, onEventDrop }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.EVENT,
    drop: (item, monitor) => {
      const { x, y } = monitor.getSourceClientOffset();
      const rect = drop.current.getBoundingClientRect();
      const start = new Date(); // تاریخ شروع رویداد
      const end = new Date(start.getTime() + 60 * 60 * 1000); // یک ساعت بعد از شروع

      onEventDrop({
        ...item,
        start,
        end,
      });
    },
  });

  return (
    <div ref={drop} className="h-[500px] border border-spGray p-4 rounded-xl flex-1">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        selectable
        onSelectSlot={({ start, end }) => {
          const title = window.prompt("نام رویداد:");
          if (title) {
            onEventDrop({ title, start, end, color: "#3174ad" });
          }
        }}
        views={["month", "week", "day"]}
        culture="fa"
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            color: "white",
          },
        })}
        messages={{
          date: "تاریخ",
          time: "زمان",
          event: "رویداد",
          allDay: "تمام روز",
          week: "هفته",
          work_week: "هفته کاری",
          day: "روز",
          month: "ماه",
          previous: "قبلی",
          next: "بعدی",
          yesterday: "دیروز",
          tomorrow: "فردا",
          today: "امروز",
          agenda: "دستور کار",
          noEventsInRange: "هیچ رویدادی در این بازه نیست.",
          showMore: (total) => `نمایش بیشتر (${total})`,
        }}
        components={{
          month: {
            dateHeader: ({ date }) => {
              const jDate = moment(date).format("jYYYY/jM/jD");
              return <span>{jDate}</span>;
            },
          },
          toolbar: (toolbar) => {
            const goToBack = () => {
              let mDate = moment(toolbar.date);
              let newDate = mDate.subtract(1, "month").toDate();
              toolbar.onNavigate("PREV", newDate);
            };

            const goToNext = () => {
              let mDate = moment(toolbar.date);
              let newDate = mDate.add(1, "month").toDate();
              toolbar.onNavigate("NEXT", newDate);
            };

            const goToCurrent = () => {
              let now = new Date();
              toolbar.onNavigate("TODAY", now);
            };

            return (
              <div className="rbc-toolbar">
                <span
                  className="rbc-btn-group"
                  style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                >
                  <button className="rounded-2xl" type="button" onClick={goToBack}>
                    ماه قبل
                  </button>
                  <button type="button" onClick={goToCurrent}>
                    امروز
                  </button>
                  <button type="button" onClick={goToNext}>
                    ماه بعد
                  </button>
                </span>
                <span className="rbc-toolbar-label">
                  {moment(toolbar.date).format("jMMMM jYYYY")}
                </span>
                <span className="rbc-btn-group">
                  <button type="button" onClick={() => toolbar.onView("month")}>
                    ماه
                  </button>
                  <button type="button" onClick={() => toolbar.onView("week")}>
                    هفته
                  </button>
                  <button type="button" onClick={() => toolbar.onView("day")}>
                    روز
                  </button>
                </span>
              </div>
            );
          },
        }}
      />
    </div>
  );
};

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [availableEvents, setAvailableEvents] = useState([
    { title: "رویداد 1", color: "#3174ad" },
    { title: "رویداد 2", color: "#e14eca" },
    { title: "رویداد 3", color: "#ff5722" },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    color: "#3174ad",
  });

  const handleEventDrop = (event) => {
    setEvents([...events, event]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const start = new Date(); // تاریخ شروع پیش‌فرض
    const end = new Date(start.getTime() + 60 * 60 * 1000); // یک ساعت بعد از شروع

    if (newEvent.title) {
      setAvailableEvents([...availableEvents, { ...newEvent, start, end }]);
      setNewEvent({ title: "", color: "#3174ad" });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-4">
        <div className="w-80 border border-spGray p-4 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">لیست رویدادها</h3>
          {availableEvents.map((event, index) => (
            <DraggableEvent key={index} event={event} />
          ))}
          <form onSubmit={handleAddEvent} style={{ marginTop: "20px" }}>
            <input
              type="text"
              name="title"
              placeholder="عنوان رویداد"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
            <input type="color" name="color" value={newEvent.color} onChange={handleInputChange} />
            <button type="submit">اضافه کردن رویداد</button>
          </form>
        </div>
        <CalendarWithEvents events={events} onEventDrop={handleEventDrop} />
      </div>
    </DndProvider>
  );
};

export default MyCalendar;
