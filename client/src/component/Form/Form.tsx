import React, { FormHTMLAttributes, forwardRef, ReactNode, Ref } from "react";

import { FormContainer } from "./Form.styles";

type FormProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

const Form = forwardRef(
  ({ children, ...rest }: FormProps, ref: Ref<HTMLFormElement>) => {
    return (
      <FormContainer ref={ref} {...rest}>
        {children}
      </FormContainer>
    );
  }
);

export default Form;
