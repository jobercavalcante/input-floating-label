import React from "react";
import {
  InputBorder,
  InputBorderActive,
  InputContainer,
  InputField,
  InputLabel,
} from "./style";

export function InputWithLabel({ nome, id, tipo, label }) {
  const [ativo, setAtivo] = React.useState(false);
  const [value, setValue] = React.useState("");

  function handleChange({ value }) {
    setAtivo(!!value);
    setValue(value);
  }

  return (
    <InputContainer ativo={ativo}>
      <InputField
        type={tipo}
        name={nome}
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target)}
      />
      <InputLabel>{label}</InputLabel>
      <InputBorder>
        <InputBorderActive />
      </InputBorder>
    </InputContainer>
  );
}
