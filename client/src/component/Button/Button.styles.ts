import styled from "styled-components";

export const ButtonContainer = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.spacers.size48};
  width: 100%;
  margin: 0px;
  padding: 0px ${({ theme }) => theme.spacers.size24};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  font-weight: bold;
  text-align: center;
  line-height: normal;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.turquoise};
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.op80};
  }
  &:active {
    opacity: ${({ theme }) => theme.opacity.op50};
  }
`;
