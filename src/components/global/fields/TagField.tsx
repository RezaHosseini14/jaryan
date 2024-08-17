import { Form, TagPicker } from "rsuite";

type SelectFieldType = {
  name: string;
  className?: string;
  title: string;
  data: { label: string; value: any }[];
  disabled?: boolean;
};

function TagField({ name, className, title, data, disabled }: SelectFieldType) {
  return (
    <Form.Group className="w-full relative">
      <Form.ControlLabel className="font-semibold text-base text-spGreen">
        {title}
      </Form.ControlLabel>

      <TagPicker
        className={`h-10 text-lg border border-spGreen w-full ${className ? className : ""}`}
        name={name}
        data={data}
        disabled={disabled}
        creatable
        style={{ width: "300px" }}
        menuStyle={{ width: "300px" }}
      />

  
    </Form.Group>
  );
}

export default TagField;
