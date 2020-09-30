import React, { forwardRef, InputHTMLAttributes, Ref } from "react";

import { InputContainer } from "./Input.styles";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  ({ ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <InputContainer ref={ref} {...rest}></InputContainer>;
  }
);

export default Input;
