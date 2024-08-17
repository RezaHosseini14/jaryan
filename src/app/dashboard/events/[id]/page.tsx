"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// components
import SampleCard from "@/components/pages/dashboard/events/Sample.Card";
import EventCard from "@/components/pages/dashboard/events/Event.Card";
import PieChart from "@/components/pages/dashboard/events/charts/PieChart";
import BarChart from "@/components/pages/dashboard/events/charts/BarChart ";
import GuestsBox from "@/components/pages/dashboard/events/guests/GuestsBox";
import GuestsModal from "@/components/pages/dashboard/events/guests/GuestsModal";

// jsons
import { mainData } from "@/json/mainData";

// images
import eventimage from "@/assets/img/azizam.jpg";

export default function EventPage({ params }: { params: { id: any } }) {
  const [open, setOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<any>({});
  const [dynamic, setDynamic] = useState<boolean>(true);
  const [guest, setGuest] = useState<any>({}); // State برای ذخیره مهمان انتخاب شده

  const eventsCardMap = mainData.map((item) => (
    <EventCard
      key={item.id} // حتماً key رو برای هر آیتم اضافه کنید.
      id={item.id}
      title={item.title}
      image={item.image}
      createTime={item.createTime}
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

  const handleOpen = (id: any) => {
    setOpen(true);
    const selectedGuest = event?.guests?.find((mmm: any) => mmm.id === id);
    setGuest(selectedGuest);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const foundEvent = mainData.find((item: any) => item.id === parseInt(params.id));

    if (foundEvent && foundEvent !== event) {
      setEvent(foundEvent);
    }
  }, [params.id]);

  useEffect(() => {
    if (open) {
      setDynamic(true);
      const timer = setTimeout(() => setDynamic(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

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
          <Swiper className="h-full" spaceBetween={50} slidesPerView={1}>
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
        <GuestsBox guests={event.guests} handleOpen={handleOpen} />
        <SampleCard className="col-span-12" icon="ki-solid ki-calendar" title="مراسم های مرتبط">
          <div className="grid 3xl:grid-cols-5 2xl:grid-cols-3 md:grid-cols-3 gap-8 w-full">
            {eventsCardMap}
          </div>
        </SampleCard>
        <GuestsModal open={open} handleClose={handleClose} dynamic={dynamic} guest={guest} />{" "}
      </div>
    </div>
  );
}
