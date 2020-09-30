import styled from "styled-components";

export const SelectContainer = styled.select`
  padding: ${({ theme }) => theme.spacers.size8};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  background-color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSizes.size20};
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.colors.base};
`;

export const OptionContainer = styled.option`
  padding: ${({ theme }) => theme.spacers.size8};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  background-color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSizes.size20};
  color: ${({ theme }) => theme.colors.base};
`;
