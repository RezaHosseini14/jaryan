"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal, Toggle, Button, ButtonToolbar, Placeholder, Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

import { events, IEvents } from "@/json/Events";
import SampleCard from "@/components/pages/dashboard/events/Sample.Card";
import EventCard from "@/components/pages/dashboard/events/Event.Card";
import PieChart from "@/components/pages/dashboard/events/charts/PieChart";
import BarChart from "@/components/pages/dashboard/events/charts/BarChart ";
import { Swiper, SwiperSlide } from "swiper/react";

import eventimage from "@/assets/img/azizam.jpg";
import userimage from "@/assets/img/user.jpg";

export default function EventPage({ params }: { params: { id: any } }) {
  const [open, setOpen] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(true);
  const [event, setEvent] = useState<IEvents>({});

  const eventsCardMap = events.map((item) => (
    <EventCard
      id={item.id}
      title={item.title}
      image={item.image}
      date={item.date}
      population={item.population}
    />
  ));

  const slides = [];
  for (let i = 0; i < 4; i++) {
    slides.push(
      <SwiperSlide className="h-full" key={i}>
        <div className="h-full w-full">
          <Image
            className="w-full h-full"
            src={eventimage}
            alt={`eventImage-${i}`}
            objectFit="cover"
          />
        </div>
      </SwiperSlide>
    );
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    events?.find((item: any) => {
      if (item.id == params.id) {
        setEvent(item);
      }
    });
  }, []);

  const guestData = [
    {
      id: 1,
      eventName: "کنفرانس تکنولوژی",
      location: "تهران",
      topic: "نوآوری‌های تکنولوژیک",
      date: "1403/05/10",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-12 gap-8">
        <div className="lg:col-span-6 col-span-12 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{event?.title}</h1>
          <div>
            <p className="text-xl font-bold">توضیحات :</p>
            <p className="text-xl">{event?.description}</p>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12 aspect-video rounded-lg overflow-hidden">
          <Swiper
            className="h-full"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides}
          </Swiper>
        </div>

        <SampleCard
          className="lg:col-span-6 col-span-12"
          icon="ki-solid ki-profile-user"
          title="انتشار و بازخورد در فضای مجازی"
        >
          <PieChart />
        </SampleCard>

        <SampleCard
          className="lg:col-span-6 col-span-12"
          icon="ki-solid ki-profile-user"
          title="منابع پرنفوذ بر اساس تعداد باز نشر"
        >
          <BarChart />
        </SampleCard>

        <SampleCard
          className="col-span-12"
          icon="ki-solid ki-profile-user"
          title="میهمان های برنامه"
        >
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 w-full">
            <div
              onClick={handleOpen}
              className="cursor-pointer flex flex-col gap-2 text-2xl items-center bg-spCream rounded-xl p-2"
            >
              <i className="ki-solid ki-user text-5xl"></i>
              <span>زهرا حیدری</span>
            </div>
          </div>
        </SampleCard>

        <SampleCard className="col-span-12" icon="ki-solid ki-calendar" title="مراسم های مرتبط">
          <div className="grid 3xl:grid-cols-5 2xl:grid-cols-3 md:grid-cols-3 gap-8 w-full">
            {eventsCardMap}
          </div>
        </SampleCard>
      </div>
    </div>
  );
}
