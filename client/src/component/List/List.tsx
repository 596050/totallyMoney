import React, { ReactNode } from "react";
import { Flex, FlexProps } from "@rebass/grid";

type ListProps = {
  children: ReactNode;
} & FlexProps;

const List = ({ children, ...rest }: ListProps) => {
  return (
    <Flex flexDirection="column" width="100%" pt={20} {...rest}>
      {children}
    </Flex>
  );
};

export default List;
