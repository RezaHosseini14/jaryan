"use client";

import React, { FormEvent, SyntheticEvent, useRef, useState } from "react";
import { Form, SelectPicker } from "rsuite";
//@ts-ignore
import moment from "moment-jalaali";

// models
import { EventsModel } from "@/models/Events.Model";

// css
import "@/assets/css/calendar.css";
import { EventFormPropsType, EventsFormType } from "@/models/types/EventForm.Types";

moment.loadPersian({ usePersianDigits: true });

const colors = [
  { label: "آبی", value: "#3174ad" },
  { label: "قرمز", value: "#ff0000" },
  { label: "نارنجی", value: "#ffa500" },
];

const EventForm = ({ events, onAddEvent, handleDeleteEvent }: EventFormPropsType) => {
  const formRef = useRef<any>();
  const [formValue, setFormValue] = useState<EventsFormType>({ title: "", color: "#3174ad" });

  const handleSubmit = async (e: FormEvent) => {
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

  const handleChange = (value: Record<string, any>) => {
    setFormValue(value as EventsFormType);
  };

  return (
    <div className="event-form col-span-4 flex flex-col gap-8">
      <div className="event-list glass-box flex flex-col gap-4 flex-1 border border-spGray rounded-xl p-4">
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
            className="flex items-center justify-between rounded-lg p-3 text-white"
          >
            <span>{event.title}</span>
            <button onClick={() => handleDeleteEvent(event.title)} className="text-red-500 ml-2">
              <i className="ki-solid ki-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <Form
        ref={formRef}
        fluid
        model={EventsModel}
        formValue={formValue}
        onChange={handleChange}
        className="glass-box flex flex-col gap-6 border border-spGray rounded-xl p-4"
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
            <SelectPicker
              className="w-full"
              data={colors}
              value={formValue.color}
              onChange={(value) => setFormValue({ ...formValue, color: value as string })}
              searchable={false}
              placeholder="یک رنگ انتخاب کنید"
            />
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
