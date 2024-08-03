import { forwardRef, Ref } from "react";
import { Form, Input, InputProps } from "rsuite";

type TextAreaFieldType = {
  name: string;
  className?: string;
  title: string;
  rows?: number | undefined;
};

const Textarea = forwardRef((props: InputProps, ref: Ref<HTMLTextAreaElement>) => (
  <Input {...props} as="textarea" ref={ref} />
));

function TexAreaField({ name, className, title, rows }: TextAreaFieldType) {
  return (
    <Form.Group
      className="xl:col-span-4 lg:col-span-3 xs:col-span-2 col-span-1"
      controlId="textarea-1"
    >
      <Form.ControlLabel className="font-semibold text-base text-spGreen">
        {title}
      </Form.ControlLabel>

      <Form.Control
        className={`h-10 text-lg border border-spGreen w-full ${className && className}`}
        rows={rows}
        name={name}
        accepter={Textarea}
      />
    </Form.Group>
  );
}

export default TexAreaField;
