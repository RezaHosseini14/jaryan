import React from "react";
import SampleCard from "../Sample.Card";

function GuestsBox({ guests, handleOpen }: any) {
  return (
    <SampleCard className="col-span-12" icon="ki-solid ki-profile-user" title="میهمان های برنامه">
      <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 w-full">
        {guests?.map((guest: any, index: number) => (
          <div
            key={index}
            onClick={() => handleOpen(guest.id)}  // ارسال ID مهمان صحیح
            className="cursor-pointer flex flex-col gap-2 text-2xl items-center bg-spCream rounded-xl p-2"
          >
            <i className="ki-solid ki-user text-5xl"></i>
            <span>{guest.title}</span>
          </div>
        ))}
      </div>
    </SampleCard>
  );
}

export default GuestsBox;
