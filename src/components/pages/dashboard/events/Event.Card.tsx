import Image from "next/image";
import React from "react";
import eventimage from "@/assets/img/azizam.jpg";
import { convertToShamsi } from "@/utils/functions";
import Link from "next/link";
import { IEvents } from "@/json/Events";

function EventCard({ id, title, image, date, population }: IEvents) {
  return (
    <Link href={`/dashboard/events/${id}`}>
      <div className="card-box">
        <div className="aspect-video rounded-lg overflow-hidden">
          <Image className="card-box-image w-full h-full" src={eventimage} alt="eventImage" objectFit="cover" />
        </div>
        <div className="text-spGreen flex flex-col items-center">
          <h1 className="text-xl text-center font-extrabold w-full truncate">{title}</h1>
          <div className="sp_border mt-2 opacity-20"></div>
          <div className="flex flex-col items gap-2 mt-4 w-full">
            <div className="flex items-center justify-between gap-1 text-lg">
              <div className="flex items-center gap-1">
                <i className="ki-solid ki-user"></i>
                <span className="font-extrabold">مدیر برگذاری :</span>
              </div>
              <span className="font-bold">حامد سلطانی</span>
            </div>

            <div className="flex items-center justify-between gap-1 text-lg">
              <div className="flex items-center gap-1">
                <i className="ki-solid ki-calendar"></i>
                <span className="font-extrabold">تاریخ :</span>
              </div>
              <span className="font-bold">{convertToShamsi(date)}</span>
            </div>

            <div className="flex items-center justify-between gap-1 text-lg">
              <div className="flex items-center gap-1">
                <i className="ki-solid ki-people"></i>
                <span className="font-extrabold">میانگین حضور :</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold">{population}</span>
                <span className="font-bold text-sm">نفر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
