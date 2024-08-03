import { Form, InputPicker } from "rsuite";
type SelectFieldType = {
  name: string;
  className?: string;
  title: string;
  data: any[];
  disabled?: boolean;
};

function SelectField({ name, className, title, data, disabled }: SelectFieldType) {
  return (
    <Form.Group>
      <Form.ControlLabel className="font-semibold text-base text-spGreen">{title}</Form.ControlLabel>
      <Form.Control
        className={`h-10 text-lg border border-spGreen w-full ${className && className}`}
        name={name}
        autoComplete="off"
        accepter={InputPicker}
        data={data}
        disabled={disabled}
      />
    </Form.Group>
  );
}

export default SelectField;
