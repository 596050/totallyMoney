import React, { ReactNode } from "react";
import { FlexProps } from "@rebass/grid";

import { CardContainer } from "./Card.styles";

type CardProps = {
  children: ReactNode;
} & FlexProps;

const Card = ({ children, ...rest }: CardProps) => {
  return <CardContainer {...rest}>{children}</CardContainer>;
};

export default Card;
