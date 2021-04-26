import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0.6rem 0.2rem 0.2rem;

  &:focus-within label {
    transform: translate(-3px, -12px) scale(0.6);
  }
  &:focus-within div > div {
    width: 100%;
    background: blue;
  }

  ${(props) => {
    return (
      props.ativo &&
      css`
        & > label {
          transform: translate(-3px, -12px) scale(0.6);
        }
      `
    );
  }}
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.2rem;
  height: 1.4rem;
  border: none;
  background: transparent;
  outline: none;
`;

export const InputLabel = styled.label`
  transition: all 0.45s ease-out;
  position: absolute;
  left: 0.2rem;
  top: 0.7rem;
  font-size: bold;
  color: lightgrey;
  z-index: -1;
`;

export const InputBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: lightgrey;
`;

export const InputBorderActive = styled.div`
  width: 0;
  height: 2px;
  background-color: #371e5b;
  transition: all 0.45s ease-out;
  overflow: hidden;
  z-index: 2;
`;
