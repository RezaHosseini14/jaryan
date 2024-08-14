"use client";
import { useRef, useState } from "react";
import { Form, Uploader } from "rsuite";
import { EventCreateModel } from "@/models/EventCreate.Model";
import { provinces } from "@/json/Provinces";
import { iranianCity } from "@/json/IranianCity";
import TextField from "@/components/global/fields/TextField";
import SelectField from "@/components/global/fields/SelectField";
import DateField from "@/components/global/fields/DateField";
import TexAreaField from "@/components/global/fields/TexAreaField";
import UploadField from "@/components/global/fields/UploadField";
import { PerosnsData, PerosnsDataType } from "@/json/PersonsData";

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

const PerosnsDataList = PerosnsData.map((person: PerosnsDataType) => ({
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
          <TextField title="محل برگذاری" name="placement" />
          <DateField title="تاریخ برگذاری" name="eventDate" />
          <TextField title="هزینه برآوردشده (ریال)" name="estimatedcost" type="number" />
          <TextField title="هزینه تمام شده (ریال)" name="totalcost" type="number" />
          <TextField title="مخاطب" name="audience" />
          <SelectField title="میهمانان" name="guests" data={PerosnsDataList} />
          <TextField title="ارگان ها" name="organs" />
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
