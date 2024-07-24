import React from "react";

function EventsLogs() {
  return (
    <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-8">
      <div className="shadow-spBox-lg flex items-center gap-4 bg-spCream text-spGreen sm:font-bold font-semibold sm:text-xl text-sm px-4 py-4 rounded-xl">
        <i className="text-3xl ki-solid ki-user"></i>
        <div className="flex flex-col gap-2 items-start">
          <span className="font-extrabold">رویداد های اینده</span>
          <span className="font-extrabold">30</span>
        </div>
      </div>
      <div className="shadow-spBox-lg flex items-center gap-4 bg-spGreen text-white sm:font-bold font-semibold sm:text-xl text-sm px-4 py-4 rounded-xl">
        <i className="text-3xl ki-solid ki-user"></i>
        <div className="flex flex-col gap-2 items-start font-extrabold">
          <span className="font-extrabold">رویداد های انجام شده</span>
          <span className="font-extrabold">30</span>
        </div>
      </div>
      <div className="shadow-spBox-lg flex items-center gap-4 bg-red-700 text-white sm:font-bold font-semibold sm:text-xl text-sm px-4 py-4 rounded-xl">
        <i className="text-3xl ki-solid ki-user"></i>
        <div className="flex flex-col gap-2 items-start font-extrabold">
          <span className="font-extrabold">رویدادهای لغو شده</span>
          <span className="font-extrabold">30</span>
        </div>
      </div>
      <div className="shadow-spBox-lg flex items-center gap-4 bg-orange-500 text-white sm:font-bold font-semibold sm:text-xl text-sm px-4 py-4 rounded-xl">
        <i className="text-3xl ki-solid ki-user"></i>
        <div className="flex flex-col gap-2 items-start font-extrabold">
          <span className="font-extrabold">روز های باقیمانده از سال</span>
          <span className="font-extrabold">30</span>
        </div>
      </div>
    </div>
  );
}

export default EventsLogs;
