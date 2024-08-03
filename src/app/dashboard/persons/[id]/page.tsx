"use client";
import { useRef, useState } from "react";
import { Form } from "rsuite";
import { PersonCreateModel } from "@/models/Person.Create.Model";
import { PersonCreateType } from "../create/page";

function PersonPage() {
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
    <Form ref={formRef} fluid model={PersonCreateModel} formValue={formValue} onChange={setFormValue} className="flex flex-col gap-8 justify-between h-full">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-8 border border-spGray p-4 rounded-xl w-full">
        <Form.Group>
          <Form.ControlLabel className="text-mainColor font-semibold">نام</Form.ControlLabel>
          <Form.Control className="h-10 text-lg" name="firstName" />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel className="text-mainColor font-semibold">نام خانوادگی</Form.ControlLabel>
          <Form.Control className="h-10 text-lg" name="lastName" autoComplete="off" />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel className="text-mainColor font-semibold">سمت</Form.ControlLabel>
          <Form.Control className="h-10 text-lg" name="job" autoComplete="off" />
        </Form.Group>
      </div>
      <button className="bg-spGreen hover:bg-spGreen/70 transition w-full h-10 rounded-xl text-white font-bold text-xl" onClick={handleSubmit}>
        ذخیره
      </button>
    </Form>
  );
}

export default PersonPage;
