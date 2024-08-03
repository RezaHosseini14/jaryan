import { Form } from "rsuite";
type TextFieldType = { name: string; className?: string; title: string; type?: string };

function TextField({ name, className, title, type }: TextFieldType) {
  return (
    <Form.Group>
      <Form.ControlLabel className="font-semibold text-base text-spGreen">
        {title}
      </Form.ControlLabel>
      <Form.Control
        className={`h-10 text-lg border border-spGreen w-full ${className && className}`}
        name={name}
        type={type}
      />
    </Form.Group>
  );
}

export default TextField;
