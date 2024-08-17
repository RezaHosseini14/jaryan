"use client";
import { useRef, useState } from "react";
import { Form, TagPicker, Uploader } from "rsuite";
import { EventCreateModel } from "@/models/EventCreate.Model";
import { provinces } from "@/json/Provinces";
import { iranianCity } from "@/json/IranianCity";
import TextField from "@/components/global/fields/TextField";
import SelectField from "@/components/global/fields/SelectField";
import DateField from "@/components/global/fields/DateField";
import TexAreaField from "@/components/global/fields/TexAreaField";
import UploadField from "@/components/global/fields/UploadField";
import { GuestsData, GuestsDataType } from "@/json/GuestsData";
import TagField from "@/components/global/fields/TagField";

type EventCreateType = {
  title: string;
  topic: string;
  province: string;
  city: string;
  placement: string;
  eventDate: string;
  estimatedcost: number | null;
  totalcost: number | null;
  audience: string;
  guests: string;
  organs: string;
  population: number | null;
  description: string;
};

const selectData = provinces.map((province) => ({
  label: province.name,
  value: province.id,
}));

const PerosnsDataList = GuestsData.map((person: GuestsDataType) => ({
  label: person.firstName + " " + person.lastName,
  value: person.lastName,
}));

const handleSelectIranianCities = (selctedProvince: string) => {
  let provinceItem = provinces.find((item) => {
    return item?.id == selctedProvince;
  });
  let newList = iranianCity.filter((city) => city?.province === provinceItem?.name);
  return newList;
};

function EventCreatepage() {
  const formRef = useRef<any>();

  const [formValue, setFormValue] = useState<EventCreateType>({
    title: "",
    topic: "",
    province: "",
    city: "",
    placement: "",
    eventDate: "",
    estimatedcost: null,
    totalcost: null,
    audience: "",
    guests: "",
    organs: "",
    population: null,
    description: "",
  });

  const handleSubmit = async () => {
    if (!formRef.current.check()) {
      return;
    } else {
    }
  };

  const handleImageChange = (images: File) => {
    setFormValue((prevFormValue: any) => ({
      ...prevFormValue,
      images,
    }));
  };

  const organsData = [
    { label: "شهرداری", value: "شهرداری" },
    { label: "سازمان تبلیغات اسلامی", value: "سازمان تبلیغات اسلامی" },
    { label: "شورای هماهنگی تبلیغات اسلامی", value: "شورای هماهنگی تبلیغات اسلامی" },
    { label: "سپاه پاسداران", value: "سپاه پاسداران" },
    { label: "وزارت ارشاد", value: "وزارت ارشاد" },
    { label: "وزارت ورزش و جوانان", value: "وزارت ورزش و جوانان" },
    { label: "استانداری", value: "استانداری" },
  ];

  return (
    <div>
      <Form
        ref={formRef}
        fluid
        model={EventCreateModel}
        formValue={formValue}
        onChange={setFormValue}
        className="flex flex-col gap-8 justify-between h-full"
      >
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-8 border border-spGray p-4 rounded-xl w-full">
          <TextField title="عنوان رویداد" name="title" />
          <TextField title="موضوع" name="topic" />
          <SelectField title="استان" name="province" data={selectData} />
          <SelectField
            title="شهر"
            name="city"
            data={handleSelectIranianCities(formValue.province)}
            disabled={!formValue.province}
          />
          <TextField title="محل برگزاری" name="placement" />
          <DateField title="تاریخ برگزاری" name="eventDate" />
          <TextField title="هزینه برآوردشده (ریال)" name="estimatedcost" type="number" />
          {/* <TextField title="هزینه تمام شده (ریال)" name="totalcost" type="number" /> */}
          <TextField title="مخاطب" name="audience" />
          <SelectField title="میهمانان" name="guests" data={PerosnsDataList} />
          <SelectField title="ارگان ها" name="organs" data={organsData} />
          {/* <TagField title="ارگان ها" name="organs" data={organsData} /> */}
          <TextField title="جمعیت" name="population" type="number" />
          <TexAreaField title="خلاصه فعالیت" name="description" rows={5} />
          <UploadField
            title="تصویر مورد نظر را انتخاب کنید"
            name="images"
            handleImageChange={handleImageChange}
          />
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
}

export default EventCreatepage;
