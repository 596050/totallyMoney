import React, {
  FieldsetHTMLAttributes,
  forwardRef,
  ReactNode,
  Ref,
} from "react";

import { FieldsetContainer } from "./Fieldset.styles";

type FieldsetProps = {
  children: ReactNode;
} & FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = forwardRef(
  ({ children, ...rest }: FieldsetProps, ref: Ref<HTMLFieldSetElement>) => {
    return (
      <FieldsetContainer ref={ref} {...rest}>
        {children}
      </FieldsetContainer>
    );
  }
);

export default Fieldset;
