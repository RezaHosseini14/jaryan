import { Form } from "rsuite";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type DateFieldType = {
  title: string;
  name: string;
};

function DateField({ title, name }: DateFieldType) {
  return (
    <Form.Group>
      <Form.ControlLabel className="font-semibold text-base text-spGreen">
        {title}
      </Form.ControlLabel>
      <DatePicker
        containerClassName="w-full"
        inputClass="w-full px-2 h-10 text-lg border border-spGreen rounded-md"
        arrow={false}
        calendarPosition="top-center"
        calendar={persian}
        locale={persian_fa}
        name={name}
      />
    </Form.Group>
  );
}

export default DateField;
