import React, { ReactNode } from "react";
import { FlexProps } from "@rebass/grid";

import { CardSelectContainer } from "./CardSelect.styles";

type CardProps = {
  children: ReactNode;
} & FlexProps;

const CardSelect = ({ children, ...rest }: CardProps) => {
  return <CardSelectContainer {...rest}>{children}</CardSelectContainer>;
};

export default CardSelect;
