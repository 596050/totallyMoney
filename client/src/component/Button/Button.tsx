import React, { ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from "react";

import { ButtonContainer } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  ({ children, ...rest }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return <ButtonContainer {...rest}>{children}</ButtonContainer>;
  }
);

export default Button;
