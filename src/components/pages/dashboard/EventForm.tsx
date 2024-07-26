"use client";

import React, { useRef, useState } from "react";
import moment from "moment-jalaali";
import { Form } from "rsuite";

import "@/assets/css/calendar.css";
import { EventsModel } from "@/models/Events.Model";

moment.loadPersian({ usePersianDigits: true });

type EventsFormType = {
  title: string;
  color: string;
};

const EventForm = ({ events, onAddEvent }) => {
  const formRef = useRef<any>();
  const [formValue, setFormValue] = useState<EventsFormType>({ title: "", color: "#3174ad" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current.check()) {
      return;
    } else {
      if (formValue.title) {
        onAddEvent(formValue.title, formValue.color, moment());
        setFormValue({ title: "", color: "#3174ad" });
      }
    }
  };

  return (
    <div className="event-form col-span-4 flex flex-col gap-8">
      <div className="event-list flex flex-col gap-4 flex-1 border border-spGray rounded-xl p-4">
        {events.length === 0 && (
          <div className="grid place-items-center h-full w-full">
            <p>رویداد فعالی یافت نشد</p>
          </div>
        )}
        {events.map((event, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("event", JSON.stringify(event))}
            style={{ backgroundColor: event.color }}
            className="rounded-lg p-3 text-white"
          >
            {event.title}
          </div>
        ))}
      </div>
      <Form
        ref={formRef}
        fluid
        model={EventsModel}
        formValue={formValue}
        onChange={setFormValue}
        className="flex flex-col gap-6 border border-spGray rounded-xl p-4"
      >
        <div className="flex flex-col gap-2 w-full">
          <Form.Group>
            <Form.ControlLabel className="font-semibold" style={{ fontSize: "1rem" }}>
              نام رویداد
            </Form.ControlLabel>
            <Form.Control className="h-8 text-lg" name="title" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel className="font-semibold" style={{ fontSize: "1rem" }}>
              رنگ رویداد
            </Form.ControlLabel>
            <Form.Control className="h-8 text-lg" name="color" />
          </Form.Group>
        </div>
        <button
          className="bg-spGreen hover:bg-spGreen/70 transition w-full h-10 rounded-xl text-white font-bold text-xl"
          onClick={handleSubmit}
        >
          ذخیره
        </button>
      </Form>
    </div>
  );
};

export default EventForm;
