"use client";
import { useRef, useState } from "react";
import { Form, Uploader } from "rsuite";
import { PersonCreateModel } from "@/models/Person.Create.Model";
import TextField from "@/components/global/fields/TextField";

export type PersonCreateType = {
  firstName: string;
  lastName: string;
  job: string;
};

function PersonCreatePage() {
  const formRef = useRef<any>();
  const [formValue, setFormValue] = useState<PersonCreateType>({
    firstName: "",
    lastName: "",
    job: "",
  });

  const handleSubmit = async () => {
    if (!formRef.current.check()) {
      return;
    } else {
    }
  };

  return (
    <Form
      ref={formRef}
      fluid
      model={PersonCreateModel}
      formValue={formValue}
      onChange={setFormValue}
      className="flex flex-col gap-8 justify-between h-full"
    >
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-8 border border-spGray p-4 rounded-xl w-full">
        <TextField title="نام" name="topic" />
        <TextField title="نام خانوادگی" name="topic" />
        <TextField title="نام خانوادگی" name="سمت" />
      </div>
      <button
        className="bg-spGreen hover:bg-spGreen/70 transition w-full h-10 rounded-xl text-white font-bold text-xl"
        onClick={handleSubmit}
      >
        ذخیره
      </button>
    </Form>
  );
}

export default PersonCreatePage;
