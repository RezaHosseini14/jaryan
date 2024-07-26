import { Form, Schema } from "rsuite";

export const EventsModel = Schema.Model({
  title: Schema.Types.StringType().isRequired("نام رویداد الزامی است"),
  color: Schema.Types.StringType(),
});
