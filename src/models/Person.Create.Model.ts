import { Form, Schema } from "rsuite";

export const PersonCreateModel = Schema.Model({
  firstName: Schema.Types.StringType().isRequired("نام شخص الزامی است"),
  lastName: Schema.Types.StringType().isRequired("نام خانوادگی شخص الزامی است"),
  job: Schema.Types.StringType(),
});
