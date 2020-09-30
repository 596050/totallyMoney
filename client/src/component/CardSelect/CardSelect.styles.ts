import styled from "styled-components";

import { Card } from "../Card";

export const CardSelectContainer = styled(Card)`
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.hover};
  }
  &:active,
  &.selected {
    outline: none;
    background: linear-gradient(
      54deg,
      rgba(113, 235, 193, 0.35057773109243695) 28%,
      rgba(255, 255, 255, 1) 41%
    );
  }
  &.selected {
    box-sizing: border-box;
    border: ${({ theme }) => theme.border};
  }
`;
