import styled from "styled-components";

import { ThemeType } from "../../util";

export const StyledMain = styled.main<{
  isFullHeight: boolean;
  width: keyof ThemeType["wrappers"];
}>`
  margin: auto;
  width: 100%;
  border: none;
  height: ${({ isFullHeight }) => (isFullHeight ? "100%" : "auto")};
  max-width: ${({ theme, width }) => theme.wrappers[width]};
  position: relative;
  background: ${({ theme }) => theme.colors.foregroundGrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: scroll;
`;
