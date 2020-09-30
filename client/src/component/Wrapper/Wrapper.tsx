import React, { ReactNode } from "react";

import { ThemeType } from "../../util";

import { StyledMain } from "./Wrapper.styles";

type Props = {
  children: ReactNode;
  isFullHeight?: boolean;
  size?: keyof ThemeType["wrappers"];
};

const Wrapper = ({
  size = "extraLarge",
  children,
  isFullHeight = true,
}: Props) => {
  return (
    <StyledMain width={size} isFullHeight={isFullHeight}>
      {children}
    </StyledMain>
  );
};

export default Wrapper;
