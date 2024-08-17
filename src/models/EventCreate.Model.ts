import { Form, Schema } from "rsuite";

export const EventCreateModel = Schema.Model({
  title: Schema.Types.StringType().isRequired("عنوان رویداد الزامی است"),
  topic: Schema.Types.StringType().isRequired("موضوع رویداد الزامی است"),
  province: Schema.Types.StringType().isRequired("استان رویداد الزامی است"),
  city: Schema.Types.StringType().isRequired("شهر رویداد الزامی است"),
  placement: Schema.Types.StringType().isRequired("محل برگزاری الزامی است"),
  eventDate: Schema.Types.StringType().isRequired("تاریخ برگزاری الزامی است"),
  estimatedcost: Schema.Types.NumberType(),
  totalcost: Schema.Types.NumberType(),
  audience: Schema.Types.StringType(),
  guests: Schema.Types.StringType(),
  organs: Schema.Types.StringType(),
  population: Schema.Types.NumberType(),
  description: Schema.Types.StringType(),
});
