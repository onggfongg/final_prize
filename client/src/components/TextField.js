import React from "react";
import { Input, Form } from "antd";
const TextField = ({ placeholder, onChange, value, type, prefix }) => {
  return (
    <Form.Item>
      <Input
        prefix={prefix}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default TextField;
