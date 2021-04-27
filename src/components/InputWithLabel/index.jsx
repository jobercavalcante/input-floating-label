import React from "react";
import {
  InputBorder,
  InputBorderActive,
  InputContainer,
  InputField,
  InputLabel,
} from "./style";

export function InputWithLabel({
  name,
  id,
  type,
  label,
  autocomplete,
  ...rest
}) {
  const [ativo, setAtivo] = React.useState(false);
  const [value, setValue] = React.useState("");

  function handleChange({ value }) {
    setAtivo(!!value);
    setValue(value);
  }

  console.log(autocomplete);
  return (
    <InputContainer ativo={ativo}>
      <InputField
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target)}
        {...rest}
      />
      <InputLabel>{label}</InputLabel>
      <InputBorder>
        <InputBorderActive />
      </InputBorder>
    </InputContainer>
  );
}
