import React, {
  forwardRef,
  OptionHTMLAttributes,
  ReactNode,
  Ref,
  SelectHTMLAttributes,
} from "react";

import { OptionContainer, SelectContainer } from "./Select.styles";

type SelectProps = {
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

type OptionProps = {
  children?: ReactNode;
} & OptionHTMLAttributes<HTMLOptionElement>;

export const Option = ({ children, ...rest }: OptionProps) => {
  return <OptionContainer {...rest}>{children}</OptionContainer>;
};

export const Select = forwardRef(
  ({ children, ...rest }: SelectProps, ref: Ref<HTMLSelectElement>) => {
    return (
      <SelectContainer ref={ref} {...rest}>
        {children}
      </SelectContainer>
    );
  }
);
